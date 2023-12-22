import { useEffect, useState } from "react";
import { fetchTopMovies, fetchTrendingMovies, fethTvPopular } from "../../services/Api";
import { MoviesModel } from '../../models/movies';
import { Link } from "react-router-dom";
import { SearchBarComponent } from "../../components/search/search";
import { TopMoviesComponent } from "../../components/topMovies/topMovies";
import { CarouselComponent } from "../../components/carousel/carouselComponent";
import styled from '@emotion/styled';
import { ContentTop } from '../../components/contentTop/contentTop';

/**
 * Se inicializa el componente HomePage
 * se realiza el consumo del servicio de movies
 * se realiza el despacho las peliculas a la store
 * renderiza los componentes carosel encargados de visualizar las peliculas
 * se renderiza el componente de busqueda por pelicula
 * se crea un state que contiene el topMovies4
 * se renderizan los componentes del carousel
 * @returns se retorna el container principal
 */

export default function HomePage() {
    const [topMovies, setTopMovies] = useState<MoviesModel[]>([])
    const [topSeries, setTopSeries] = useState<MoviesModel[]>([])
    const [allMovies, setAllMovies] = useState<MoviesModel[]>([])

    const TitleCarousel = styled.h2`
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 2rem;
    ` 

    useEffect(() => {

        //se realiza la peticion de Get Trending y se almacena en el storage
        const chargeTrendingMovies = async () => {
            try {
                const response: MoviesModel[] = await fetchTrendingMovies()
                setAllMovies(response)
            } catch (error) {
                console.error("Error al obtener películas tendencia:", error);
            }
        }

        //se realiza la peticion de Movie Top_rated y se almacena en el estado de la app
        const chargeTopMovies = async() => {
            try {
                const response: MoviesModel[] = await fetchTopMovies()
                setTopMovies(response);
            }catch(error) {
                console.error("Error al obtener películas top 4:", error)
            }
        }

        //se realiza la peticion de TV Top_rated y se almacena en el estado de la app
        const chargeTopSeries = async() => {
            try {
                const response: MoviesModel[] =  await fethTvPopular()
                setTopSeries(response)
            }catch(error) {
                console.error("Error al obtener las series top:", error)
            }
        }

        chargeTopMovies()
        chargeTrendingMovies()
        chargeTopSeries()
    }, [])


  return (
    <>
        <section className="h-screen w-screen">
            {/* Componente de busqueda y renderizado*/}
            <SearchBarComponent/>

            {/* Boton redireccion favoritesPage*/}
            <Link 
                to="/favorites" 
                className="m-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center"
                >
                Mis favoritas
            </Link>   

            {/* Componente de pelicula movie*/}
            <ContentTop movie={topMovies}/>

            {/* Componente de carousel de peliculas y titulo custom > usa como parametro la respuesta del servicio*/}
            <TitleCarousel className="mt-3">Peliculas populares</TitleCarousel>
            <CarouselComponent movies={allMovies} isMovie={true}/>

            {/* Componente de carousel de peliculas y titulo custom > usa como parametro la respuesta del servicio*/}
            <TitleCarousel>Series populares</TitleCarousel>
            <CarouselComponent movies={topSeries} isMovie={false}/>
           
            {/* Componente de Top movies de peliculas > usa como parametro la respuesta del servicio*/}
            <TopMoviesComponent movies={topMovies} />
        </section>
    </>
  );
}
