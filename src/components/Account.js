import React from 'react'
import {UserAuth} from './AuthContext'
import {useNavigate} from 'react-router-dom'
import {Link} from "react-router-dom";
import './Account.css'

function Account() {

    const navigate = useNavigate()
    const {logOut, user} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(err) {
          console.log(err)
        }
       }

       
       

  return (
    <div className='Account'>
<h3>Welcome, {user ?.displayName ? user.displayName : 'User' }!  </h3>

{user ?.displayName ? <button onClick={handleSignOut}>Logout</button> : <Link to='/sign-in' id='dissapear'>Login</Link> }

    </div>
  )
}

export default Account