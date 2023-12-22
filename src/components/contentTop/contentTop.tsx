import styled from "@emotion/styled";
import { MoviesModel } from "../../models/movies";

/**
 * componente encargado de visualizar la pelicula top 
 * @param movie se recibe como parametro la pelicula top a mostrar
 * @returns componente 
 */

export function ContentTop({movie}: {movie: MoviesModel[]}) {
    const TitleMovie = styled.p`
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    `

    const DescripMovie = styled.h2 `
        font-size: 1rem;
    `

    const ContentDesc = styled.div `
        position: absolute;
        z-index: 2;
        margin-top: 30rem;
    `

    return (
        <>
            {
              movie.length > 0 && (
                <div style={{ position: 'relative' }}>
                    <ContentDesc>
                        <TitleMovie className="mx-2">{movie[0]?.title}</TitleMovie>
                        <DescripMovie className="mx-2 mt-5">{movie[0]?.overview}</DescripMovie>
                    </ContentDesc>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie[0]?.backdrop_path}`}
                        alt={movie[0]?.title}
                        className="h-auto w-full shadow-xl dark:shadow-gray-800 rounded"
                    />
                </div>
              )  
            }
        </>
    )
   
}