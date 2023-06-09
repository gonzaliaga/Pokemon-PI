import React from 'react';
import './footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__column">
        <h3 className="name" >APP Pokémon™</h3>
        <ul>
          <li className="sub">Creado por Gonzalo Cuéllar Aliaga</li>
          <li className="sub">Copyright© {currentYear}</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="name2" >Redes Sociales</h3>
        <ul className="icon-row">
          <li>
            <a href="https://www.linkedin.com/in/gonzalo-cuellar-aliaga-4530559a" target="_blank" rel="noreferrer" alt="LinKedin">
              <div className="icon-linkedin"></div>
            </a>
          </li>
          <li>
            <a href="https://github.com/gonzaliaga" target="_blank" rel="noreferrer" alt="Repositorio Github">
              <div className="icon-github"></div>
            </a>
          </li>
          <li>
            <a href="https://wa.link/nf9h8x" target="_blank" rel="noreferrer" alt="Chat WtsApp">
              <div className="icon-wtsapp"></div>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="name3"> Pokémon Game</h3>
        <ul>
          <li className="icon-row" >
            <a href="../Game" alt="Game Pokémon">
              <div className="icon-pokemon"></div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
