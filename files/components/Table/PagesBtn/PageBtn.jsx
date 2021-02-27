import React from 'react'
import style from './../../../App.module.css'

const PageBtn = ({ pages, setPage }) => {
    return (
        <div className={style.pages_block}>
            {
                pages.map(item => <button onClick={() => setPage(item)}
                    className={style.page_btn}>
                    {item}
                </button>)
            }
        </div>
    )
}

export default PageBtn