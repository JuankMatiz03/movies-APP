import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { MovieState } from '../../models/movieState';
import { MoviesModel } from '../../models/movies';

/**
 * Se configura el reducer con su initialState en el que se establecen dos atributos,
 * trendingMovies -> lista de peliculas
 * se establecen los reducer setFavorites,  removeFavoritepara la carga y despacho de las peliculas recolectadas
 * desde el servicio,
 * removeFavorite reducer para eliminar la pelicula seleccionada pelicula seleccionada.
 * Se finaliza con exportar las acciones para su uso.
 */

const initialState: MovieState = {
  favoriteMovies: []
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<MoviesModel>) => {
      state.favoriteMovies.push(action.payload) ;
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload)
    }
  },

  // excluir 'register' directamente en el reducer -> error KEY
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith('persist/') && action.type.endsWith('REGISTER'),
        (state) => state
      )
  },
})

export const { setFavorites, removeFavorite } = movieSlice.actions
export const fetchFavorites = (state: RootState) => state.movies.favoriteMovies

export default movieSlice.reducer
