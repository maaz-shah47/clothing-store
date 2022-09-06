import React from 'react'
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
