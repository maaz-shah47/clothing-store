import { Routes , Route } from 'react-router-dom';
import Shop from './routes/shop/Shop'
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> }/>
        <Route path='sign-in' element={ <Authentication /> }/>
      </Route>
    </Routes>
  );
}

export default App;
