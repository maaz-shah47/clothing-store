import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUser } from '../../utils/firebase'

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultValues)
  const {displayName, email, password, confirmPassword} = formFields

  const handleChange = (event) => {
    const {name, value} = event.target

    // console.log(event.target.name)
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
    } catch (error) {
      console.log('Error while login', error.message)
    }
  }
  return (
    <div>
      <h1>Sign up with email or password</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input required type='text' name='displayName' value={displayName} onChange={handleChange} />
        <label>Email</label>
        <input required type='email' name='email' value={email} onChange={handleChange} />
        <label>Password</label>
        <input required type='password' name='password' value={password} onChange={handleChange} />
        <label>Confirm Password</label>
        <input required type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
