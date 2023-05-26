import React from 'react';
import style from './Acerca.module.css';
import Navbar from '../Navbar/Navbar';
/* import Footer from '../footer/footer'; */
import Oak from '../../images/pokeball.png';

export default function Acerca() {
    return (
        <div className={style.home}>
            <div className={style.nav}>
                <Navbar />
            </div>


            <div className={style.pagina}>
                <img src={Oak} alt="Pikachu" height="250px" className={style.img} />
{/*                 <Footer /> */}
                <div className={style.container}>
                    <div className={style.header}>
                        <h2>Acerca del Proyecto</h2>
                    </div>
                    <div className={style.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                    <div className={style.text}></div>
                </div>


            </div>
            </div>
    );
}

