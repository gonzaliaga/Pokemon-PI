const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_POKEMONS":
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
        };
  
      case "RELOAD_POKEMONS":
        const apiPokesSort = state.allPokemons
          .filter((el) => !el.createdInDb)
          .sort((a, b) => a.id - b.id);
        const dbPokesSort = state.allPokemons
          .filter((el) => el.createdInDb)
          .sort((a, b) => a.id - b.id);
        let sortedArrayNormal = [...apiPokesSort, ...dbPokesSort];
  
        return {
          ...state,
          pokemons: sortedArrayNormal,
        };
  
      case "GET_TYPES":
        return {
          ...state,
          types: action.payload,
        };
  
      case "POST_POKEMON":
        return {
          ...state,
        };
  
      case "GET_POKEMON_NAME":
        return {
          ...state,
          pokemons: action.payload,
        };
  
      case "REMOVE_DETAILS":
        return {
          ...state,
          detail: [],
        };
  
      case "GET_DETAILS":
        return {
          ...state,
          detail: action.payload,
        };
  
      case "FILTER_BY_TYPES":
        const allPokemons = state.allPokemons;
        const statusFiltered =
          action.payload === "All"
            ? allPokemons
            : allPokemons.filter((el) => el.types.includes(action.payload));
  
        return {
          ...state,
          pokemons: statusFiltered.length
            ? statusFiltered
            : [`${action.payload} Pokemons`],
        };
  
      case "FILTER_CREATED":
        const allPokemons2 = state.allPokemons;
        const statusFiltered2 =
          action.payload === "Created"
            ? allPokemons2.filter((el) => el.createdInDb)
            : allPokemons2.filter((el) => !el.createdInDb);
  
        return {
          ...state,
          pokemons:
            action.payload === "All"
              ? allPokemons2
              : statusFiltered2.length
              ? statusFiltered2
              : ["Pokemons created"],
        };
  
      case "ORDER_BY_NAME_OR_STRENGH":
        const sortArray = [...state.pokemons];
        let sortedArray;
  
        switch (action.payload) {
          case "asc":
            sortedArray = sortArray.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "desc":
            sortedArray = sortArray.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case "HAttack":
            sortedArray = sortArray.sort((a, b) => b.attack - a.attack);
            break;
          case "LAttack":
            sortedArray = sortArray.sort((a, b) => a.attack - b.attack);
            break;
          case "normal":
            const apiPokes = sortArray
              .filter((el) => !el.createdInDb)
              .sort((a, b) => a.id - b.id);
            const dbPokes = sortArray
              .filter((el) => el.createdInDb)
              .sort((a, b) => a.id - b.id);
            sortedArray = [...apiPokes, ...dbPokes];
            break;
          default:
            sortedArray = sortArray;
        }
  
        return {
          ...state,
          pokemons: sortedArray,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;
  