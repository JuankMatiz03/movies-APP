import { useEffect, useState } from "react"
import { searchMovieByQuery } from "../../services/Api"
import { MoviesModel } from "../../models/movies"
import styled from "@emotion/styled";
import { SearchResultComponent } from "../searchResult/searchResult";
import SpinnerComponent from "../spinner/SpinnerComponent";


/**
 * se inicializa el componente SearchBar y sus estilios
 * se realiza la consulta a la api de busqueda por pelicula, usando el componente SearchBar
 * se carga actualiza el estado con el metodo setMoviesFilter para capturar la lista
 * @returns retorna la pelicula buscada mediante el query
 */

export function  SearchBarComponent() {

    const NotResultTitle = styled.p`
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
    `;

    const [moviesFilter, setMoviesFilter] = useState<MoviesModel[]>([])
    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [showLoader, setShowLoader] = useState<boolean>(false)

    // Efecto para limpiar los datos al montar el componente
    useEffect(() => {
        setMoviesFilter([]);
    }, [])

    // se carga actualiza el estado con el metodo setMoviesFilter para capturar la lista
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    setShowLoader(true)
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const search = formData.get("search") as string

    if(!search) {
        return
    }

    try {
        const response = await searchMovieByQuery(search) 
        setShowLoader(false)
        setMoviesFilter(response)
        setShowInfo(true)
    }catch(e) {
        setShowLoader(false)
        console.log('Error en realizar la busqueda')
    }
      
		form.reset()
	}

  
    return (
      <section>
        <form className="px-5 p-4" onSubmit={handleSubmit}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Busca peliculas y series de television"
              name="search"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>

        {
          showLoader && (
            <SpinnerComponent />
          )
        }

        { showInfo && (
            <div>
                {moviesFilter.length > 0 ? (
                   <SearchResultComponent dataResult={moviesFilter}/>
                ) : (
                    <NotResultTitle className="text-center font-bold mt-5">No se encontraron resultados</NotResultTitle>
                )}
             </div>
        )}
      </section>
    )
}
  