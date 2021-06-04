import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ItemListContainer from './containers/ItemList/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './containers/Cart/CartContainer'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-red-500 to-green-400">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home titulo={'Pizzeria Signiorini'} />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer titulo={'Menu'} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
