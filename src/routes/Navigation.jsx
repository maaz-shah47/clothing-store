import { Fragment, useContext } from 'react'
import { UserContext } from '../contexts/user-context'
import { Link, Outlet } from 'react-router-dom'
import { signOutUser } from '../utils/firebase'

import {ReactComponent as Logo} from '../assets/crown.svg'
import './navigation.styles.scss'
import CartIcon from '../components/cartIcon/CartIcon'
import CartDropDown from '../components/cartDropDown/CartDropDown'
import { CartContext } from '../contexts/cart-context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

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
            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
            ) : ( <Link className='nav-link' to='/sign-in'>Sign In</Link> )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />  }
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
