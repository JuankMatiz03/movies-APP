import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MoviesModel } from '../../models/movies';
import { Link } from 'react-router-dom';

/**
 * Se inicializa el componente CarouselComponent y se establecen su estilos
 * se inicia la configuracion del carousel
 * el componente recibe como parametro el array y el valor isMovie que valida la renderizacion a mostrar
 * @param movies lista peliculas a mostrar en el carousel
 * @param isMovie booleano que valida tipo de dato a renderizar en el componente DetailMovie
 * @returns Componente renderizado
 */

export function CarouselComponent({ movies, isMovie }: {movies: MoviesModel[], isMovie: boolean}) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className='mx-5 px-5'>
        <Slider {...settings}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}/${isMovie}`}>
            <div className='px-5'>
              <div className="p-4">
                <img 
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={`${movie.title}`} />
              </div>
            </div>
          </Link>
        ))}
        </Slider>
      </section>
    </>
 
  );
}

