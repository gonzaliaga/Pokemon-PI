

export default function validate(input, pokemons){
    let errors = {};
    let RegExpression = /^[a-zA-Z\s]*$/;  

    if(!input.name){
        errors.name = 'Se requiere un nombre'
    }
    if(pokemons.indexOf( input.name ) !== -1){
        errors.name = 'Ya existe un Pokémon con ese nombre'
    }
    if(!RegExpression.test(input.name)){
        errors.name = 'No se permiten números ni caracteres especiales'
    }
    if(input.name.length > 18){
        errors.name = `El nombre no puede tener más de 18 caracteres`
    }

    if(input.hp < 1 || input.hp > 150){
        if(input.hp < 1 ){
            errors.hp = 'La vida del Pokémon debe ser superior a 1'
        }
        if( input.hp > 150){
            errors.hp = 'La vida del Pokémon debe ser menor a 150'
        } 
    }
    if(input.attack < 1 || input.attack > 200){
        if(input.attack < 1 ){
            errors.attack = 'El ataque del Pokémon debe ser superior a 1'
        }
        if( input.attack > 200){
            errors.attack = 'El ataque del Pokémon debe ser menor a 200'
        } 
    }
    if(input.defense < 1 || input.defense > 200){
        if(input.defense < 1 ){
            errors.defense = 'La defensa del Pokémon debe ser superior a 1'
        }
        if( input.defense > 200){
            errors.defense = 'La defensa del Pokémon debe ser menor a 200'
        } 
    }
    if(input.speed < 1 || input.speed > 100){
        if(input.speed < 1 ){
            errors.speed = 'La velocidad del Pokémon debe ser superior a 1'
        }
        if( input.speed > 100){
            errors.speed = 'La velocidad del Pokémon debe ser inferior a 100'
        } 
    }
    if(input.weight < 1 || input.weight > 1500){
        if(input.weight < 1 ){
            errors.weight = 'El peso del Pokémon debe ser superior a 1'
        }
        if( input.weight > 1500){
            errors.weight = 'El peso del Pokémon debe ser inferior a 1500'
        } 
    }
    if(input.height < 1 || input.height > 80){
        if(input.height < 1 ){
            errors.height = 'La altura del Pokémon debe ser superior a 1'
        }
        if( input.height > 80){
            errors.height = 'La altura del Pokémon debe ser inferior a 80'
        } 
    }

    if(!input.types.length){
        errors.types = 'Debe elegir un tipo de Pokémon'
    }
    if(input.types.length > 2){
        errors.types = `No puedes elegir más de 2 tipos por Pokémon`
    }
    
    return errors;
}