import React from 'react';
import style from './Acerca.module.css';
import Navbar from '../Navbar/Navbar';
/* import Oak from '../../images/pokeball.png'; */

export default function Acerca() {
  return (
    <div>
      <div className={style.nav}>
        <Navbar/>
      </div>
      <div className={style.pagina}>
{/*         <div className={style.home}> */}
{/*           <div className={style.contenido}></div> */}
          <video autoPlay muted loop>
            <source src={require("../../images/videos/VideoAcercade.mp4")} type="video/mp4" />
            Tu navegador no admite videos HTML5.
          </video>
          <div className={style.container}>
            <div className={style.header}>
              <h2>Acerca del Proyecto</h2>
            </div>
            <br />
            <div className={style.text}>

              <p>Corría el año 2023, mes enero, día 2, lore</p>
              <p>Corría el año 2023, mes enero, día 2, lore</p>
              <p>Corría el año 2023, mes enero, día 2, lore</p>
              <p>Corría el año 2023, mes enero, día 2, lore</p>
              <p>Corría el año 2023, mes enero, día 2, lore</p>
            </div>

        </div>
      </div>
    </div>
  );
}
