import React from 'react'
import { createUser, signInWithGooglePopup } from '../utils/firebase'

const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user)
    const newUser = await createUser(user)
    console.log(newUser)
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={loginUser}>Sign in</button>
    </>
  )
}

export default SignIn
