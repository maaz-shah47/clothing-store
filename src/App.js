import { Routes , Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import SignIn from './routes/SignIn';

const Shop = () => {
  return(
    <h1>I am the shop component</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> }/>
        <Route path='sign-in' element={ <SignIn /> }/>
      </Route>
    </Routes>
  );
}

export default App;
