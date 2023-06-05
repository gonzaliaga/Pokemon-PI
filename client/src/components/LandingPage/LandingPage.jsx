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
      <div className={style.overlay}>
        <video src={videoBG}  autoPlay loop muted />
      </div>
      <div className={style.content}>
        <h1 className={style.titulo}>Pokémon</h1>
        <h2 className={style.texto}>¡Atrápalos a todos!
          <br />

        </h2>
        <Link to="/home">
          <button className={style.boton}>GO POKE-Masters!</button>
        </Link>
      </div>
    </div>
  );
}
