import React, { useContext } from  'react'
import { Context } from '../../context'
import InputArea from './InputArea'

const InputAreaContainer = () => {

    const {findPosition, inputValue, addBtnStatus, addCustomUser} = useContext(Context)

    return(
      <InputArea inputValue={inputValue}
      addBtnStatus={addBtnStatus}
      findPosition={findPosition}
      addCustomUser={addCustomUser}/>
    )
}

export default InputAreaContainer