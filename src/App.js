import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/container/ItemList/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetail/ItemDetailContainer'


function App() {
  return (
    <div className="App">
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
