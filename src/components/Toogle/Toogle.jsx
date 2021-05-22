import React from 'react'
import Preloader from '../Preloader/Preloader'
import style from './../../App.module.css'

const Toogle = ({ setSTData, isLoad }) => {
    return (
        <div className={style.toogle_block}>
            <input type='radio' name='data' onClick={() => setSTData(-1)} /> Local
            <input type='radio' name='data' onClick={() => setSTData(200)} /> 200
            <input type='radio' name='data' onClick={() => setSTData(1000)} /> 1000
            {
                !isLoad
                    ? <Preloader />
                    : null
            }
        </div>

    )
}

export default Toogle