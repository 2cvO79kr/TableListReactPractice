import React from 'react'
import style from './../../App.module.css'

const InputArea = ({ findPosition, inputValue, addBtnStatus ,addCustomUser}) => {

    return (
        <div className={style.input_block}>
            <input type='text'
                onChange={findPosition}
                value={inputValue} 
                placeholder='Enter user s params'/>
            <button disabled={addBtnStatus} onClick={addCustomUser}>add user</button>
        </div>
    )
}

export default InputArea