import {heroes} from '../data/personajes'



export const getHero = (ide) => heroes.find((heroe) => heroe.id === ide)



export const getOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)





