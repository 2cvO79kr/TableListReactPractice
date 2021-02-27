import React from 'react'
import senpaiWoop from './../../other/image/SenpaiWoop.gif'
import style from './../../App.module.css'

const Info = ({ user }) => {
    return (
        <div className={style.user_info}>
            <img src={senpaiWoop} />
            <div>
                {user.status == false
                    ? <span>Choose user</span>
                    : <p >
                        Выбран пользователь <b>{user.data.firstName} {user.data.lastName}</b><br />
                ID: <b>{user.data.id}</b><br />
                Описание:<br />
                        <textarea value={user.data.description} /><br />
                Адрес проживания: <b>{user.data.address.streetAddress}</b><br />
                Город: <b>{user.data.address.city}</b><br />
                Провинция/штат: <b>{user.data.address.state}</b><br />
                Индекс: <b>{user.data.address.zip}</b><br />
                    </p>}
            </div>
        </div>
    )
}

export default Info