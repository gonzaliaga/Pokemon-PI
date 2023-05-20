import React, { useEffect } from 'react';
import { getPokemons, getTypes } from '../../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import videoBG from '../../images/videos/videoBG.mp4';



export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={videoBG} autoPlay loop muted />
      <div className={style.content}>
        <h1 className={style.titulo}>Pokémon</h1>
        <h2 className={style.texto}>¡Atrápalos a todos!
          <br />
{/*           <Typed
            strings={['Pokémon', 'Juegos', 'Crea el tuyo!']}
            typeSpeed={100}
            backSpeed={100}
            loop
          /> */}
        </h2>
        <Link to="/home">
          <button className={style.boton}>Inicio</button>
        </Link>
      </div>
    </div>
  );
}
