import React, { useState, useContext } from 'react'
import UserContext from '../context/ContextUser.js'

function User() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setUser({ username, password })
    }

    return (
        <div>
            <div>create user here</div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username'
                value={username}
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor='password'>Password</label>
            <input type='text' name='password' id='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>
                submit
            </button>

        </div>
    )

}

export default User