import React from 'react'
import style from './../../../App.module.css'

const Head = ({ tableHeader, setGrowList, setDigList }) => {
    return (
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
    )
}

export default Head