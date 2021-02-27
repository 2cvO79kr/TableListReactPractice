import React, { useReducer, useEffect } from 'react';
import { Context } from './context';
import Info from './components/Info/Info';
import listReducer, { changeInputValueAC, findPositionAC, setDataAC, setDigListAC, setGrowListAC, setSortToogleAC, setUserAC, setPageAC } from './other/listReducer';
import style from './App.module.css'
import InputAreaContainer from './components/InputArea/InputAreaContainer';
import TableContainer from './components/Table/TableContainer';
import PageBtnContainer from './components/Table/PagesBtn/PageBtnContainer';
import localData from './other/localData/localData.json'

const App = () => {

  let defaultState = {
    inputValue: '',
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
      itemsNumber: 1000,
      pageSize: 25,
      currentPage: 1,
    }
  }

  const [state, dispatch] = useReducer(listReducer, defaultState)

  /* const url = `http://www.filltext.com/?rows=${state.tableListOption.itemsNumber}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => dispatch(setDataAC(result))
      )
  }, [])  для работы с ссылкой */ 

  useEffect(() => {
      dispatch(setDataAC(localData))
  }, [])

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

  return (
    <Context.Provider value={{
      data: state.visibleList,
      inputValue: state.inputValue,
      tableHeader: state.tableHeader,
      tableListOption: state.tableListOption,
      findPosition,
      setGrowList,
      setDigList,
      getUserInfo,
      setPage
    }}>
      <div className={style.container}>
        <div className={style.table_area}>
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
