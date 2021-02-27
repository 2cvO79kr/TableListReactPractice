const SET_DATA = 'SET_DATA'
const SET_SORT_TOOGLE = 'SET_SORT_TOOGLE'
const SET_GROW_LIST = 'SET_GROW_LIST'
const SET_DIG_LIST = 'SET_DIG_LIST'
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const FIND_POSITION = 'FIND_POSITION'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_PAGE = 'SET_PAGE'

const listReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                dataList: action.data,
                visibleList: action.data,
            }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    status: true,
                    data: action.user
                }
            }
        }
        case SET_SORT_TOOGLE: {
            return {
                ...state,
                tableHeader: [...state.tableHeader.map(item => item.sortKey == action.key
                    ? item.activeSort
                        ? {
                            ...item,
                            activeSort: !item.activeSort
                        }
                        : {
                            ...item,
                            activeSort: true
                        }
                    : {
                        ...item,
                        activeSort: null
                    })]
            }
        }
        case SET_GROW_LIST: {
            return {
                ...state,
                visibleList: [...state.dataList.sort((a, b) => typeof (a[action.sortKey]) === 'string'
                    ? a[action.sortKey].localeCompare(b[action.sortKey])
                    : a[action.sortKey] - b[action.sortKey])
                ]
            }
        }
        case SET_DIG_LIST: {
            return {
                ...state,
                visibleList: [...state.dataList.sort((a, b) => typeof (b[action.sortKey]) === 'string'
                    ? b[action.sortKey].localeCompare(a[action.sortKey])
                    : b[action.sortKey] - a[action.sortKey])
                ]
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.value,
                tableListOption: {
                    ...state.tableListOption,
                    currentPage: 1
                }
            }
        }
        case FIND_POSITION: {
            return {
                ...state,
                visibleList: [...state.dataList.filter(item => item.firstName.toLowerCase().includes(state.inputValue, 0)
                    || item.lastName.toLowerCase().includes(state.inputValue, 0)
                    || item.email.toLowerCase().includes(state.inputValue, 0)
                    || item.phone.includes(state.inputValue, 0))]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                tableListOption: {
                    ...state.tableListOption,
                    currentPage: action.page
                }
            }
        }
        default:
            return state
    }
}

export const setDataAC = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

export const setSortToogleAC = (key) => {
    return {
        type: SET_SORT_TOOGLE,
        key
    }
}

export const setGrowListAC = (sortKey) => {
    return {
        type: SET_GROW_LIST,
        sortKey
    }
}

export const setDigListAC = (sortKey) => {
    return {
        type: SET_DIG_LIST,
        sortKey
    }
}

export const changeInputValueAC = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

export const findPositionAC = () => {
    return {
        type: FIND_POSITION
    }
}

export const setUserAC = (user) => {
    return {
        type: SET_USER_DATA,
        user
    }
}
export const setPageAC = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}

export default listReducer