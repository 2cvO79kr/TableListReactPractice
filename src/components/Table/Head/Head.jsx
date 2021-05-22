import React from 'react'
import style from './../../../App.module.css'

const Head = ({ tableHeader, setGrowList, setDigList, customUser, changeCustomInputValue }) => {
    return (
        <>
            <tr>
                {
                    tableHeader.map(item => <th
                        onClick={item.activeSort == null || item.activeSort == false
                            ? () => setGrowList(item.sortKey)
                            : () => setDigList(item.sortKey)
                        }
                        className={item.activeSort == null
                            ? style.normalCell
                            : style.activeCell}
                    >{item.name} {
                            item.activeSort == null || item.activeSort == false
                                ? <span>&darr; </span>
                                : <span>&uarr; </span>
                        }
                    </th>)
                }
            </tr>
            <tr>
                {
                    customUser.inputOption.map(item => <th className={style.normalCell}>
                        <input type='text' placeholder={item.placeholder}
                            value={item.value}
                            onChange={(event) => changeCustomInputValue(item.key, event)} />
                    </th>)
                }
            </tr></>
    )
}

export default Head