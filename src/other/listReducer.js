const SET_DATA = 'SET_DATA'
const SET_SORT_TOOGLE = 'SET_SORT_TOOGLE'
const SET_GROW_LIST = 'SET_GROW_LIST'
const SET_DIG_LIST = 'SET_DIG_LIST'
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const FIND_POSITION = 'FIND_POSITION'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_PAGE = 'SET_PAGE'
const ADD_CUSTOM_USER = 'ADD_CUSTOM_USER'
const CHANGE_CUSTOM_INPUT_VALUE = 'CHANGE_CUSTOM_INPUT_VALUE'
const CHOOSE_LOCAL = 'CHOOSE_LOCAL'
const CHOOSE_OUTSIDE = 'CHOOSE_OUTSIDE'
const IS_LOAD = 'IS_LOAD'

const listReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                dataList: action.data,
                visibleList: action.data,
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.text,
                tableListOption: {
                    ...state.tableListOption,
                    currentPage: 1
                }
            }
        }
        case CHANGE_CUSTOM_INPUT_VALUE: {
            const setKeyParams = (key, arrOptions) => {
                let temp = arrOptions.filter(item => item.key == key)
                return temp[0].value
            }
            return {
                ...state,
                addBtnStatus: state.customUser.inputOption.some((item) => item.value == ''),
                customUser: {
                    ...state.customUser,
                    inputOption: [
                        ...state.customUser.inputOption.map(item => item.key == action.key
                            ? item.key == 'id'
                                ? {
                                    ...item,
                                    value: /\D/.test(action.text) ? state.customUser.customExample.id.toString() : action.text
                                }
                                : {
                                    ...item,
                                    value: action.text
                                }
                            : item)
                    ],
                    customExample: {
                        ...state.customUser.customExample,
                        id: +setKeyParams('id', state.customUser.inputOption),
                        firstName: setKeyParams('firstName', state.customUser.inputOption),
                        lastName: setKeyParams('lastName', state.customUser.inputOption),
                        email: setKeyParams('email', state.customUser.inputOption),
                        phone: setKeyParams('phone', state.customUser.inputOption),
                    }
                }
            }
        }
        case ADD_CUSTOM_USER: {
            return {
                ...state,
                addBtnStatus: true,
                dataList: [state.customUser.customExample, ...state.dataList],
                visibleList: [state.customUser.customExample, ...state.dataList],
                customUser: {
                    ...state.customUser,
                    inputOption: [
                        { placeholder: 'ID', key: 'id', value: '' },
                        { placeholder: 'Имя', key: 'firstName', value: '' },
                        { placeholder: 'Фамилия', key: 'lastName', value: '' },
                        { placeholder: 'Почта', key: 'email', value: '' },
                        { placeholder: 'Телефон', key: 'phone', value: '' },
                    ]
                },
                customExample: {
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: {
                        streetAddress: '###',
                        city: '###',
                        state: '###',
                        zip: '###'
                    },
                    description: '#####'
                },
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
        case CHOOSE_LOCAL: {
            return {
                ...state,
                isLoad: false,
                tableListOption: {
                    ...state.tableListOption,
                    localData: true
                }
            }
        }
        case CHOOSE_OUTSIDE: {
            return {
                ...state,
                isLoad: false,
                tableListOption: {
                    ...state.tableListOption,
                    localData: false,
                    itemsNumber: action.n
                }
            }
        }
        case IS_LOAD: {
            return {
                ...state,
                isLoad: true
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

export const changeInputValueAC = (text) => {
    return {
        type: CHANGE_INPUT_VALUE,
        text
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

export const addUserAC = () => {
    return {
        type: ADD_CUSTOM_USER
    }
}

export const setCustomInputValueAC = (text, key) => {
    return {
        type: CHANGE_CUSTOM_INPUT_VALUE,
        text, key
    }
}

export const chLocal = (n) => {
    return {
        type: CHOOSE_LOCAL,
        n
    }
}

export const chOutside = (n) => {
    return {
        type: CHOOSE_OUTSIDE,
        n
    }
}

export const isLoadAC = () => {
    return {
        type: IS_LOAD
    }
}

export default listReducer