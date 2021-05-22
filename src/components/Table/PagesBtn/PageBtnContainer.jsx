import React, { useContext } from 'react'
import { Context } from '../../../context'
import PageBtn from './PageBtn'

const PageBtnContainer = () => {

    const { tableListOption, setPage, data } = useContext(Context)

    var pages = []
    for (let i = 1; i <= Math.ceil(data.length / tableListOption.pageSize); i++) {
        pages.push(i)
    }

    return (
        <PageBtn pages={pages}
        setPage={setPage}/>
    )
}

export default PageBtnContainer