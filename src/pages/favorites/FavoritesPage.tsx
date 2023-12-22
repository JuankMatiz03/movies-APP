import { MoviesModel } from '../../models/movies';
import { SearchBarComponent } from "../../components/search/search";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import  start  from './../../assets/start.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites, removeFavorite } from '../../state/reducers/movieSlice';

/**
 * Se inicializa el componente FavoritesPage y se establecen su estilos
 * se renderiza la lista de favoritos apartir de la store
 * @returns Componente renderizado
 */

export default function FavoritesPage() {
    const [showMovies, seShowMovies] = useState<boolean>(false)

    const movies = useSelector(fetchFavorites)
    const dispath = useDispatch()

    // se valida que exitan datos para renderizar la vista
    useEffect(() => {
        const getFavorites = () => {
            if(movies?.length == 0){
                seShowMovies(false)
            }else {
                seShowMovies(true)
            }
        }

        getFavorites()
    }, [movies])

    /**
     * metodo encargado de eliminar la pelicula selecionada de la lista de favoritos
     * @param id id de la pelicula a eliminar
     */
    const deleteMovie = (id: number) => {
        dispath(removeFavorite(id))
    } 
   
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

    return (
        <>
        <section className="h-screen w-screen">
        {/*Componente de busqueda*/}
        <SearchBarComponent/>

        {
            showMovies ? (
                movies.length > 0 && (
                    <div className="mt-6 grid px-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        { movies.map((movie: MoviesModel) => (
                            <div key={movie.id} className="group relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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

                                <div className="flex flex-col items-center pb-10">
                                <div className="flex mt-4 md:mt-6">
                                    <a onClick={() => deleteMovie(movie.id)}  className="inline-flex items-center px-5  text-white bg-red-700 px-5 rounded bg-border-red-700">
                                        Eliminar
                                    </a>
                                </div>
                            </div>
    
                            </div>
                        ))}
                    
                    </div>
                )
            ): <TitleGeneric className='m-5'>Sin favoritos...</TitleGeneric>
        }
        </section>
        </>
    )
}
