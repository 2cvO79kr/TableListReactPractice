import React, { useContext } from 'react'
import { Context } from '../../context'
import Table from './Table'

const TableContainer = () => {

    const { data, getUserInfo, tableListOption } = useContext(Context)


    return (
        data.length == 0
            ? <div>not found</div>
            : <Table data={data}
                getUserInfo={getUserInfo}
                tableListOption={tableListOption} />


    )
}

export default TableContainer