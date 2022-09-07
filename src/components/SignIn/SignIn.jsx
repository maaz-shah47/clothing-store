import React, { useState } from 'react'
import FormInput from '../formInput/FormInput'
import { userSignInWithEmailAndPassword, createUser, signInWithGooglePopup } from '../../utils/firebase'

import './signin.styles.scss'
import Button from '../button/Button'

const defaultValues = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultValues)
  const {email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultValues)
  }

  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUser(user)
  }
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await userSignInWithEmailAndPassword(email, password)

    try {
    } catch (error) {
      console.log('Error while login', error.message)
    }
    resetFormFields()
  }
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign In with email or password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" inputoptions={{
          required: true,
          type: 'text',
          name: 'email',
          value: email,
          onChange: handleChange
        }} />
        <FormInput label="Password" inputoptions={{
          required: true,
          type: 'password',
          name: 'password',
          value: password,
          onChange: handleChange
        }} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={loginUser}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
