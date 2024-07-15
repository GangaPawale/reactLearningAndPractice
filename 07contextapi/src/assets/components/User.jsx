
import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

function User() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }


    return (
        <>
            <div>
                Let us UnderStand What is Context and Context.provider
            </div>
            <input type="text" placehoder="Username" id="username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />

            <input type="text" placeholder="Password" id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button onClick={handleSubmit}>Submit</button>

        </>
    )
}

export default User
