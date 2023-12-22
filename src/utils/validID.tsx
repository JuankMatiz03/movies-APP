import { MoviesModel } from "../models/movies";

/**
 * metodo encargado de validar si ya se encuentra un a pelicula en la lista de favoritos para no agregarlo
 * @param array matriz a comparar
 * @param idToCheck id a validar
 * @returns retorna un booleano dependiendo el estado para su posterior validacion
 */

export function hasDuplicateId(array: MoviesModel[], idToCheck: number) {
    return (array.find(item => item.id === idToCheck) !== undefined)
}
  