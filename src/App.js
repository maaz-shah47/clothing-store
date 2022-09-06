import { Routes , Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/authentication';
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
        <Route path='sign-in' element={ <Authentication /> }/>
      </Route>
    </Routes>
  );
}

export default App;
