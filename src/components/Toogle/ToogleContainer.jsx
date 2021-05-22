import React, { useContext } from 'react'
import { Context } from '../../context'
import Toogle from './Toogle'

const ToogleContainer = () => {

    const { setSTData, isLoad } = useContext(Context)

    return (
        <Toogle setSTData={setSTData}
        isLoad={isLoad} />
    )
}

export default ToogleContainer