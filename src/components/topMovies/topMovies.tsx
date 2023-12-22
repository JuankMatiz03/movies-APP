import styled from "@emotion/styled";
import { MoviesModel } from "../../models/movies";
import { Link } from "react-router-dom";

/**
 * Se inicializa el componente TopMoviesComponent
 * Se encarga de listar la 4 top movies
 * @param movies lista de peliculas a renderizar
 * @returns Componente renderizado
 */

export function TopMoviesComponent({ movies } : { movies: MoviesModel[] }) {
    const top4Movies = movies.slice(0, 4);

    const TitleCard = styled.p`
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    `

    return (
        <>
          <section className="mb-5">
          <TitleCard className="text-center">Desatacadas del mes</TitleCard>
            {
                top4Movies && (
                    <div className="mt-8 px-5 mx-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { top4Movies.map((movie) => (
                     
                      <div key={movie.id} className="group relative">
                         <Link to={`movie/${movie.id}/true`}>
                          <div className="aspect-h-1 mx-3 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                              alt={movie.title}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                        </Link>
                        
                      </div>
                    ))}
                    <div className=""></div>
                  </div>
                )
            }
          </section>
        </>
    )
}