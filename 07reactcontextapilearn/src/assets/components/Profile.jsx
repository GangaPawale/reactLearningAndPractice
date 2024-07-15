import React from 'react'
import UserContext from '../context/ContextUser'

function Profile() {
    const { user } = React.useContext(UserContext)
    if (!user) return (
        <>You are not logged in ,Login please</>
    )
    if(user.username=='')return<>Please enter username currectly</>
    return (
        <div>
            profile of user :{user.username}
            <br/>
            profile password:{user.password}
        </div>
        
    )

}

export default Profile