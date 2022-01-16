import {getHero} from './ejercicios/heroes-por-id'

const getHeroeAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const superHero = getHero(id)
            if(superHero){
                resolve (superHero);
            }
            else{
                reject( "no se encontro el ID");
            }
        })
    })
}
getHeroeAsync(2)
    .then( heroe => console.log('Heroe ', heroe))
    //tambien se podria dejar  solo
    //.them(console.log) a secas y manda el primer argumento como valor
    .catch(err => console.log('Error ', err))