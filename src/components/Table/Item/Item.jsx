import React from 'react'

const Item = ({ item, getUserInfo }) => {
    return (
        <tr onClick={() => getUserInfo(item)} key={item.id + item.email}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    )
}

export default Item