      
import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'
import SearchBar from '../SearchBar/SearchBar'
import imagenLogo from '../../images/pokemon.png'
import { useLocation } from 'react-router-dom';


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {

    setClicked(!clicked)
  }
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isPokemonsPage = location.pathname === "/pokemons";
  const isAcercaPage = location.pathname === "/acerca";

  return (
    <>

      <NavContainer >
        <a href="/">
          <img src={imagenLogo} alt="Logo" style={{ width: '150px', height: '70px', zIndex: 100, float: 'left' }} />
        </a>
        <br />
        <div ClassName='search'>
          {!isPokemonsPage && /* !isAcercaPage &&  */<SearchBar style={{ marginLeft: '300px' }} />}
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          {!isHomePage && <a onClick={handleClick} href="/home">Inicio</a>}
          {!isPokemonsPage && <a onClick={handleClick} href="/pokemons">Crear</a>}
          {!isAcercaPage && <a onClick={handleClick} href="/acerca">Acerca</a>}
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}>
          <a href="/">
            <img src={imagenLogo} alt="Logo" style={{ width: '150px', height: '70px', zIndex: 100, float: 'left' }} />
          </a>
        </BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
height: 6vh;
border-top: 5px solid black;
border-bottom: 10px;
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  img {
    margin-top: 10px;
    margin-left: 3px;
    z-indez: 150;
  }
  logo{
    width: 150px;
    height: 70px;
    z-index: 100;
    float: left;
  }
  padding: .8rem;
  background-color: rgba(0, 10, 63, 0.9);
  /* background: linear-gradient(0deg, rgba(4,0,18,1) 1%, rgba(0,28,177,1) 4%, rgba(30,2,146,1) 65%, rgba(31,2,98,1) 89%, rgba(1,8,46,1) 100%); */
  display: flex;
  flexDirection: column;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
    margin-left: 1px;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    z-indez: 20;
    a{
      box-shadow: 0 0 40px 40px #801105 inset, 0 0 0 0 #801105;
      box-sizing: border-box;
      border: 3px solid #801105;
      border-radius: 0.6em;
      padding: 0.5em 1em;

      color: white;
      font-size: 2rem;
      display: block;
    }
    a:hover{

      box-shadow: 0 0 10px 0 #801105 inset, 0 0 10px 4px #000a3f;
      transition: all 100ms ease-in-out;
    }

    
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 35%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: 50px;
    top: 3px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 20;
    a{
      text-align: center;
      font-size: 1rem;
      margin-top: 2rem;
      color: white;
      box-shadow: 0 0 40px 40px #801105 inset, 0 0 0 0 #801105;
    }
    a:hover{

      box-shadow: 0 0 10px 0 #801105 inset, 0 0 10px 4px #000a3f;
      transition: all 100ms ease-in-out;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    z-index: 20;
  }


`

const BgDiv = styled.div`
  background-color: #000a3f;
  position: absolute;
  top: -700px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-top: 5px solid black;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 1;
    img {
      margin-left: 3px;
      align: left;
      width: 80%;
      transition: all .4s ease ;
    }
  }
  .search {

    align-items: left;

  }
`