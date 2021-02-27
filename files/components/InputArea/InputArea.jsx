import React from 'react'
import style from './../../App.module.css'

const InputArea = ({ findPosition, inputValue }) => {

    return (
        <div className={style.input_block}>
            <input type='text'
                onChange={findPosition}
                value={inputValue} />
        </div>
    )
}

export default InputArea