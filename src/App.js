import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetail/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <NavBar/>
            <Route exact path="/">
              <ItemListContainer titulo={'Pizzeria Signiorini'}/> 
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
