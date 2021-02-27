import React, { useContext } from 'react'
import { Context } from '../../../context'
import Head from './Head'

const HeadContainer = () => {

    const { tableHeader, setGrowList, setDigList } = useContext(Context)

    return (
        <Head tableHeader={tableHeader}
            setGrowList={setGrowList}
            setDigList={setDigList} />
    )
}

export default HeadContainer