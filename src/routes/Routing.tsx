import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import SpinnerComponent from '../components/spinner/SpinnerComponent';

/**
 * Se inicializan las rutas del proyecto
 * la ruta (Movie) recibe el ID de la pelicula a mostrar su detalle
 * @returns retorna la estructura de rutas  
 */

export function Routing() {

    const HomePage = lazy(() => import('./../pages/home/HomePage'));
    const FavoritesPage = lazy(() => import('./../pages/favorites/FavoritesPage'));
    const MoviePage = lazy(() => import('./../pages/movieDetail/MovieDetail'));
    const NotFound = lazy(() => import('./../pages/notFound/NotFound'));

    return (
        <main>
            <Suspense fallback={SpinnerComponent()}>
                <Routes>
                    <Route path='/' Component={HomePage}></Route>
                    <Route path='/favorites' Component={FavoritesPage}></Route>
                    <Route path='/movie/:id/:isMovie' Component={MoviePage}></Route>
                    <Route path='*' Component={NotFound}></Route>
                </Routes>
            </Suspense>
        </main>
    )
}