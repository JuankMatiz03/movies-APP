import styled from '@emotion/styled';
import { MoviesModel } from '../../models/movies';
import { Link } from 'react-router-dom';
import  start  from './../../assets/start.svg';

/**
 * Se inicializa el componente SearchResultComponent
 * se eliminan los elemntos en NULL
 * componente encargado de renderizar los resultados de la busqueda
 * @param dataResult lista de peliculas a renderizar
 * @returns Componente renderizado
 */

export function SearchResultComponent({ dataResult }: { dataResult: MoviesModel[] }) {
    const dataMovies = dataResult.filter(movies => movies.backdrop_path !== null)

    const TitleGeneric = styled.p`
        color: white;
        font-weight: bold;
        font-size: 2rem;
    `

    const TitleCard = styled.p`
        color: white;
        font-size: 1rem;
        font-weight: bold;
    `

    const DescripCard = styled.p`
        color: white;
        font-size: 0.6rem;
        font-weight: 300;
    `

    return(
        <>
            {
                dataMovies.length > 0 && (
                    <div className="mt-6 grid px-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        { dataMovies.map((movie: MoviesModel) => (
                            <div key={movie.id} className="group relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                        alt={movie.title}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>

                                <div className="mt-4">
                                    <div className='flex'> 
                                        <img src={start} className="logo w-5 text-white" alt="start logo" />
                                        <span className="text-xs py-3 mt-1 ml-1 text-gray-900 dark:text-white">{movie.popularity}</span>
                                    </div>
                                    <TitleCard className="text-xs text-center">{movie.title}</TitleCard>
                                    <DescripCard className='mt-5'>{movie.overview}</DescripCard>
                                </div>

                                <div className='flex justify-center p-4 mt-5'>
                                        <Link 
                                            to={`/movie/${movie.id}/true`}
                                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                                        >Ver pelicula
                                        </Link>    
                                </div>
                            </div>
                        ))}
                       
                    </div>
                )
            }
            {
                dataResult.length > 0 && (
                    <div className='text-center mt-5'>
                        <TitleGeneric>Fin de los resultados...</TitleGeneric>
                    </div>
                )
            }
        </>
    )
}