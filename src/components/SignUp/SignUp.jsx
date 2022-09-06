import React, { useState, useContext } from 'react'
import FormInput from '../formInput/FormInput'
import { createAuthUserWithEmailAndPassword, createUser } from '../../utils/firebase'
import { UserContext } from '../../contexts/user-context'

import './signup.styles.scss'
import Button from '../button/Button'

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultValues)
  const {displayName, email, password, confirmPassword} = formFields

  const resetFormFields = () => {
    setFormFields(defaultValues)
  }
  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
     console.log('password not match')
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)

      await createUser(user, {displayName})
      resetFormFields()
    } catch (error) {
      console.log('Error while login', error.message)
    }
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email or password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" inputoptions={{
          required: true,
          type: 'text',
          name: 'displayName',
          value: displayName,
          onChange: handleChange
        }} />
        <FormInput label="Email" inputoptions={{
          required: true,
          type: 'email',
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
        <FormInput label="Confirm Password" inputoptions={{
          required: true,
          type: 'password',
          name: 'confirmPassword',
          value: confirmPassword,
          onChange: handleChange
        }} />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
