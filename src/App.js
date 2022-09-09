import { Routes , Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Shop from './routes/shop/Shop'
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/authentication';
import Checkout from './routes/checkout/Checkout';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase';
import { setCurrentUser } from './store/user/user-actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop/*' element={ <Shop /> }/>
        <Route path='sign-in' element={ <Authentication /> }/>
        <Route path='checkout' element={ <Checkout /> }/>
      </Route>
    </Routes>
  );
}

export default App;
