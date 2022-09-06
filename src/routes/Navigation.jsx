import { Fragment, useContext } from 'react'
import { UserContext } from '../contexts/user-context'
import { Link, Outlet } from 'react-router-dom'
import { signOutUser } from '../utils/firebase'

import {ReactComponent as Logo} from '../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <Link to='/'>
            <Logo className='logo'/>
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          {
            currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
            ) : ( <Link className='nav-link' to='/sign-in'>Sign In</Link> )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
