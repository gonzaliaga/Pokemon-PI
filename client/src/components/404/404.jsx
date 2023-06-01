import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const notFound = () => {
  return (
    <>
      <section id="fourohfour">
        <div className='img'></div>
        <div className='text'>
          <h1>La página que buscas no Existe!!!</h1>
          <h2>no insista, no esta...</h2>
          <Link to="/home">
            <button className="boton">Inicio</button>
          </Link>
          
        </div>
      </section>
    </>
  );
}

export default notFound;
