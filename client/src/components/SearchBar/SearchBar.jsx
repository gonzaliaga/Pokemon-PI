import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPokemonName } from '../../actions';
import style from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const location = useLocation;
  const [name, setName] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    let timer;
    if (isSearching && name !== '') {
      timer = setTimeout(() => {
        dispatch(getPokemonName(name));
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [name, isSearching, dispatch]);

  function handleInputChange(e) {
    setName(e.target.value.replaceAll(/^\s+/g, '').replaceAll(/\s+/g, ' '));
    setIsSearching(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== '') {
      dispatch(getPokemonName(name));
      setName('');
      setIsSearching(false);
    }
  }


  const isCreatePokemon = location.pathname === '/pokemons';
  if (isCreatePokemon) {
    return null;
  }
 
  return (
    <div className={style.searchBox}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={style.searchTxt}
          type="text"
          placeholder="  Buscar  Pokémon..."
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" className={style.searchBtn} style={{ outline: 'none' }}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
