
import React, { useEffect } from 'react'

import {GoogleButton} from 'react-google-button'
import {UserAuth} from './AuthContext'
import {useNavigate} from 'react-router-dom'
import './SignIn.css'

function SignIn() {
    

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn ()
             
        } catch (err) {
            console.log(err)
        }
    }


    


    useEffect(() => {
        if(user != null ) {
            navigate('/account')
        }
    }, [user])


  return (
    <div className='Sign-in'>
        <h2>Sign-in using your Google Account</h2>
        <GoogleButton onClick={handleGoogleSignIn}/>


    </div>
  )
}

export default SignIn