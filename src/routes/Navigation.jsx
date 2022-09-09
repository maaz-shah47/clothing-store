import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { signOutUser } from '../utils/firebase'

import CartIcon from '../components/cartIcon/CartIcon'
import CartDropDown from '../components/cartDropDown/CartDropDown'
import { selectIsCartOpen } from '../store/cart/cart-selecter'
import {ReactComponent as Logo} from '../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
