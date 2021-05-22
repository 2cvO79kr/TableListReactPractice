import React, { useContext } from 'react'
import { Context } from '../../../context'
import Head from './Head'

const HeadContainer = () => {

    const { tableHeader, setGrowList, setDigList, customUser,changeCustomInputValue } = useContext(Context)

    return (
        <Head tableHeader={tableHeader}
            customUser={customUser}
            setGrowList={setGrowList}
            setDigList={setDigList}
            changeCustomInputValue={changeCustomInputValue} />
    )
}

export default HeadContainer