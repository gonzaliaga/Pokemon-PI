import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import axios from 'axios';

const PokemonAPI = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    if (pokemonName !== '') {
      fetchPokemonData();
    }
  }, [pokemonName]);

  const PokemonModel = () => {
    const mesh = useRef();

    useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.y += 0.01;
      }
    });

    if (!pokemonData) {
      return null;
    }

    const { id, name, sprites } = pokemonData;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(sprites.front_default);

    return (
      <mesh ref={mesh}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.pokemonName.value;
    setPokemonName(name);
    setPokemonData(null); // Clear previous data
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Generate 3D Pokemon</button>
      </form>
      {pokemonData && (
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PokemonModel />
        </Canvas>
      )}
    </div>
  );
};

export default PokemonAPI;
