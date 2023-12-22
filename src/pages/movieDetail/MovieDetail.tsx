import { Link, useParams } from 'react-router-dom';
import { MoviesModel } from '../../models/movies';
import { useEffect, useState } from 'react';
import { fetchDetailMovies, fetchDetailSerie } from '../../services/Api';
import { SearchBarComponent } from '../../components/search/search';
import heard from './../../assets/heard.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites, setFavorites } from '../../state/reducers/movieSlice';
import { hasDuplicateId } from '../../utils/validID';

/**
 * Se inicializa el componente MovieDetail y se establecen su estilos
 * @returns Componente renderizado
 */

export default function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState<MoviesModel>()
    
    const dispatch = useDispatch()
    const moviesFavorites = useSelector(fetchFavorites)
    const { id, isMovie } = useParams()
    const navigate = useNavigate()

    let isFavorite = false

    // se consume el servicio del detalle de la pelicula y se almacena su estado si isMovie esta en true
    useEffect(() => {
        if(isMovie == 'true') {
            const fetchDetailMovie = async() => {
                
                try {
                    const movie  = await fetchDetailMovies(`${id}`)
                    setMovieDetail(movie)
                }catch(error) {
                    console.log("Error al consultar el detalle de la pelicula", error)
                }
            }

            fetchDetailMovie()
        }else {

            // se consume el servicio del detalle de la serie si esta en false isMovie
            const fetchDetailSeries = async() => {
                
                try {
                    const serie  = await fetchDetailSerie(`${id}`)
                    setMovieDetail(serie)
                }catch(error) {
                    console.log("Error al consultar el detalle de la serie", error)
                }
            }

            fetchDetailSeries()
        }
    }, [
        setMovieDetail,
        id,
        moviesFavorites, 
        isMovie
    ])

    // se agregan las peliculas favoritas al sotre
    // se realiza validazion con el metodo hasDuplicateId para validar si se encuentra ya en la lista
    const setFavorite = () => {
        isFavorite = moviesFavorites.some((favMovie) => favMovie.id === movieDetail?.id);

        if(!hasDuplicateId(moviesFavorites, movieDetail!.id)) {
            dispatch(setFavorites(movieDetail!))
        }


        navigate('/favorites')
    }
   

    return (
        <>
            {/*Componente de busqueda*/}
            <SearchBarComponent/>

            <section className='w-screen h-screen flex justify-center'>
                <div className="m-14">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-100">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path}`}
                            alt={movieDetail?.title}
                            className="min-h-80 w-full"
                        />
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4 text-gray-800 mt-5">{movieDetail?.title || movieDetail?.name}</h1>
                            <p className="text-gray-700 text-lg mb-4">
                                {movieDetail?.overview}
                            </p>
                            <div className="flex flex-col items-center pb-10">
                                <div className="flex mt-4 md:mt-6">
                                    <a onClick={setFavorite}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <img src={heard} className="logo w-5 text-white" alt="start logo" />
                                        {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                                    </a>
                                    <Link className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3' 
                                        to={'/'}>
                                        Atras
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}