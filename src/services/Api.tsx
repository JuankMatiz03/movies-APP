import axios from "axios"

//token de acceso y url del endpoint
const BASE_URL = import.meta.env.VITE_BASE_URL
const BASE_TOKEN = import.meta.env.VITE_BASE_TOKEN

/**
 *Configuracion inicial
 *Se realiza la configuración del interceptor con el Token del usuario 
 *@returns config -> interceptor configurado
 */

axios.interceptors.request.use((config) => {
    config.headers['accept'] = 'application/json'
    config.headers['Authorization'] = `Bearer ${BASE_TOKEN}`
    return config
  }, (error) => {
    return Promise.reject(error)
})

/**
 * Se realiza el consumo del servicio principal de TMDb
 * @returns todas las peliculas
 */

const fetchTrendingMovies = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/week`)

        return response.data.results
    }catch(e) {
        console.error('Error al obtener las películas más populares:', e)
        throw e
    }
}

/**
 * Se realiza el consumo del servicio que filtra y busca las peliculas
 * @param query string el cual contiene el parametro a buscar
 * @returns retorna las peliculas filtradas
 */

const searchMovieByQuery = async(query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    
    try {
        const response = await axios.get(url)

        return response.data.results
    }catch(e) {
        console.error('Error buscar la pelicula:', e)
        throw e
    }
}

/**
 * Se realiza el consumo del servicio obtiene el top 4 
 * @returns retorna las peliculas consultadas
 */

const fetchTopMovies = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?language=en-US&page=1`)

        return response.data.results
    }catch(e) {
        console.error('Error al obtener las películas más populares:', e)
        throw e
    }
}

/**
 * se realiza la consulta del detalle de la pelicula
 * @param id se consulta por el id
 * @returns retorna los datos de la pelicula
 */

const fetchDetailMovies = async(id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`)

        return response.data
    }catch(e) {
        console.error('Error al obtener las películas mas populares:', e)
        throw e
    }
}

/**
 * se realiza la consulta del detalle de la serie
 * @param id se consulta por el id
 * @returns retorna los datos de la serie
 */

const fetchDetailSerie = async(id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/tv/${id}?language=en-US`)

        return response.data
    }catch(e) {
        console.error('Error al obtener las películas mas populares:', e)
        throw e
    }
}

/**
 * se realiza la consulta a lista de series favoritas
 * @returns retorna los datos de las series
 */

const fethTvPopular = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/tv/top_rated?language=en-US&page=1`)

        return response.data.results
    }catch(e) {
        console.error('Error al obtener las series mas populares:', e)
        throw e
    }
} 

export { 
    fetchTrendingMovies,
    searchMovieByQuery,
    fetchTopMovies,
    fetchDetailMovies,
    fethTvPopular,
    fetchDetailSerie
}

