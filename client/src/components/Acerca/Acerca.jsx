import React from 'react';
import style from './Acerca.module.css';
import Navbar from '../Navbar/Navbar';
import css3 from '../../images/iconos/css3.png';
import pgs from '../../images/iconos/postgres.png';
import JS from '../../images/iconos/JavaScript.png';
import node from '../../images/iconos/nodeJS.png';
import henry from '../../images/iconos/LOGO-HENRY.png';
import rct from '../../images/iconos/REACT.png';
import rdx from '../../images/iconos/redux.png';
import mpch from '../../images/iconos/mapaches.jpg';

/* import Oak from '../../images/pokeball.png'; */

export default function Acerca() {
  return (
    <div>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.pagina}>
        <video autoPlay muted loop>
          <source src={require("../../images/videos/VideoAcercade.mp4")} type="video/mp4" />
          Tu navegador no admite videos HTML5. Actualiza por favor
        </video>
        <div className={style.container}>
          <div className={style.header}>
            <h2>Acerca del Proyecto</h2>
          </div>
          <br />
          <div className={style.text}>
            <p>Llegaste a la página más importante del proyecto, estás en ese lugar en donde muchos quieren conocer...
               y todo comienza con una Historia:</p>{/* </p> atrapante, intrigante, y solo te lo contaré a ti.
            <p>En este punto no existen los proyectos de Pokémones, ni Paises, videojuegos, Food, Dogs ni nada, 
              solo tú y la pantalla.</p>
            <p className={style.prepare}> Prepárate...</p> */}
            <p>Corría el año 2023, mes enero, día 2, Inicié los estudios en Henry, estudiando tecnologías como <b>JS - Avanzado</b>, <b>NodeJS</b>, Luego <b>REACT</b>, <b>Redux</b>, <b>PostgreSQL</b> y otras mas,
              Formamos un grupo maravilloso que se llama <b>"Los Mapaches"</b>, parte tambien de la Tecnología <b>"humana"</b></p>
            <p>Este Proyecto individual es sobre <b>Pokémon</b>, se siguieron todos los pasos del README que se dio, mas otras cosillas que son necesarias para su funcionamiento,
              estoy orgulloso de lo que hice, mas allá que siempre anduve en tecnología, siempre fui una persona de Back End y estructuras lógicas, NUNCA hice un Front End, y puedo decir que me encantó.
              Aprendi muchas cosas y me encontré con una parte creativa que no sabia que tenia.<br/>
              Este es mi <b>Proyecto</b>,espero que te guste.
            </p>
            <p className={style.text2}><b>Gonzalo</b></p>
          </div>

              <div className={style.img}>
              <p className={style.text1}>Este proyecto se realizó con las siguientes tecnologías:</p>
                <img src={css3} alt="CSS3" />
                <img src={pgs} alt="PostgreSQL" />
                <img src={node} alt="NodeJS" />
                <img src={rct} alt="React" />
                <img src={rdx} alt="Redux" />
                <img src={JS} alt="JavaScript" />
                <img src={henry} alt="Henry" />
                <img src={mpch} alt="Mapaches" />
              </div>

        </div>
      </div>
    </div>
  );
}
