/**
 * interface inicial del estado 
 */

import { MoviesModel } from "./movies";

export interface MovieState {
    favoriteMovies: MoviesModel[]
}