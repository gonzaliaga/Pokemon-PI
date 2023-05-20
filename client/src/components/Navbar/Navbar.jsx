import React from 'react' ;
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css'
/* import game from '../../images/game.png'; */


export default function Navbar(){
    return (
        <nav className={style.nav}>
            <Link to='/'>
                <span className={style.landinglink}>
                    <img id="logoPoke" src={`../../images/pokemon.png`} width="120" alt="landing" />
                </span>
            </Link>
            <SearchBar />
{/*             {<Link to='/game' style={{ textDecoration: 'none' }} className={style.game}><button className={style.poke}><img src={game} alt="Who's that Pokemon" width='100px' /></button></Link>}
 */}
            <Link to="/pokemons"><button className={style.create1}>Crear</button></Link>
            <Link to=""><button className={style.create2}>Acerca de</button></Link>
        </nav>
      );
}