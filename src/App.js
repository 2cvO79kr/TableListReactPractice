import React, { useReducer, useEffect } from 'react';
import { Context } from './context';
import Info from './components/Info/Info';
import listReducer, { changeInputValueAC, isLoadAC, findPositionAC, setDataAC, addUserAC, setDigListAC, setGrowListAC, setSortToogleAC, setUserAC, setPageAC, setCustomInputValueAC, chLocal, chOutside } from './other/listReducer';
import style from './App.module.css'
import InputAreaContainer from './components/InputArea/InputAreaContainer';
import TableContainer from './components/Table/TableContainer';
import PageBtnContainer from './components/Table/PagesBtn/PageBtnContainer';
import localData from './other/localData/localData.json'
import ToogleContainer from './components/Toogle/ToogleContainer';

const App = () => {

  let defaultState = {
    onLoad: false,
    inputValue: '',
    addBtnStatus: true,
    customUser: {
      inputOption: [
        { placeholder: 'ID', key: 'id', value: '' },
        { placeholder: 'Имя', key: 'firstName', value: '' },
        { placeholder: 'Фамилия', key: 'lastName', value: '' },
        { placeholder: 'Почта', key: 'email', value: '' },
        { placeholder: 'Телефон', key: 'phone', value: '' },
      ],
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
    },
    tableHeader: [
      { name: 'ID', sortKey: 'id', activeSort: null },
      { name: 'Имя', sortKey: 'firstName', activeSort: null },
      { name: 'Фамилия', sortKey: 'lastName', activeSort: null },
      { name: 'Почта', sortKey: 'email', activeSort: null },
      { name: 'Телефон', sortKey: 'phone', activeSort: null },
    ],
    dataList: [],
    visibleList: [],
    currentUser: {
      status: false
    },
    tableListOption: {
      itemsNumber: 200,
      pageSize: 50,
      currentPage: 1,
      localData: true
    }
  }

  const [state, dispatch] = useReducer(listReducer, defaultState)

  const url = `http://www.filltext.com/?rows=${state.tableListOption.itemsNumber}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
  useEffect(() => {
    state.tableListOption.localData
      ? dispatch(setDataAC(localData))
      : fetch(url)
        .then(response => response.json())
        .then(result => {
          dispatch(setDataAC(result))
          dispatch(isLoadAC())
        })
        .catch(err => alert(err))
  }, [state.tableListOption.localData, state.tableListOption.itemsNumber])

  function setGrowList(key) {
    dispatch(setSortToogleAC(key))
    dispatch(setGrowListAC(key))
  }

  function setDigList(key) {
    dispatch(setSortToogleAC(key))
    dispatch(setDigListAC(key))
  }

  function findPosition(event) {
    let text = event.target.value
    dispatch(changeInputValueAC(text))
    dispatch(findPositionAC())
  }

  function getUserInfo(userData) {
    dispatch(setUserAC(userData))
  }

  function setPage(page) {
    dispatch(setPageAC(page))
  }

  function addCustomUser() {
    dispatch(addUserAC())
  }

  function changeCustomInputValue(key, event) {
    let text = event.target.value
    dispatch(setCustomInputValueAC(text, key))
  }

  function setSTData(n) {
    n == -1
      ? dispatch(chLocal(n))
      : dispatch(chOutside(n))
  }

  return (
    <Context.Provider value={{
      isLoad: state.isLoad,
      data: state.visibleList,
      inputValue: state.inputValue,
      addBtnStatus: state.addBtnStatus,
      tableHeader: state.tableHeader,
      tableListOption: state.tableListOption,
      customUser: state.customUser,
      findPosition,
      setGrowList,
      setDigList,
      getUserInfo,
      setPage,
      addCustomUser,
      changeCustomInputValue,
      setSTData
    }}>
      <div className={style.container}>
        <div className={style.table_area}>
          <ToogleContainer />
          <InputAreaContainer />
          <TableContainer />
          <PageBtnContainer />
        </div>
        <Info getUserInfo={getUserInfo}
          user={state.currentUser} />
      </div>
    </Context.Provider>

  );
}

export default App;
