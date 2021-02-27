import React from 'react'
import HeadContainer from './Head/HeadContainer'
import Item from './Item/Item'

const Table = ({ data, getUserInfo, tableListOption }) => {
    return (
        <table>
            <thead>
                <HeadContainer />
            </thead>
            <tbody>
                {
                    data.map(item => {
                        if (data.indexOf(item) >= (tableListOption.currentPage - 1) * tableListOption.pageSize
                            && data.indexOf(item) < tableListOption.currentPage * tableListOption.pageSize) {
                            return <Item item={item}
                                getUserInfo={getUserInfo} />


                        }
                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default Table