import React, { useContext } from 'react'
import UserContext from './UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return (<>
        YOu should login
    </>)
    return (
        <div>
            UserName:{user.userName}
        </div>


    )
}

export default Profile

