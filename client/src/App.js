import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import PokemonCreate from './components/PokemonCreate/PokemonCreate'
import Detail from './components/Detail/Detail'
import Game from './components/Game/Game';
import Acerca from './components/Acerca/Acerca.jsx';
import notFound from './components/404/404.jsx';
/* import PokemonAPI from './components/pokefake/PokemonAPI' */


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/game" component={Game}/>
          <Route path="/pokemons" component={PokemonCreate}/>
          <Route exact path="/home/:id" component={Detail}/>
          <Route exact path="/acerca" component={Acerca}/>
          <Route path="*" component={notFound}/>
          {/* <Route exact path="/fake" component={PokemonAPI}/> */} 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
