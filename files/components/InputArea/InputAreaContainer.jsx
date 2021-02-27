import React, { useContext } from  'react'
import { Context } from '../../context'
import InputArea from './InputArea'

const InputAreaContainer = () => {

    const {findPosition, inputValue} = useContext(Context)

    return(
      <InputArea inputValue={inputValue}
      findPosition={findPosition}/>
    )
}

export default InputAreaContainer