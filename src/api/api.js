import axios from 'axios'

const userReq = axios.create({
    baseURL: "https://react-web-express.herokuapp.com/api/v1/user"
})

const movieInfoReq = axios.create({
    baseURL: "https://react-web-express.herokuapp.com/api/v1/movie"
})


export const apiUserLogin = (data) => userReq.post("/login", data, {
    withCredentials: true,
})
export const apiUserSiginUp = (data) => userReq.post("/signup", data, {
    withCredentials: true,
})

export const apiUserLogout = () => userReq.post("/logout", {
    withCredentials: true,
})
export const checkUserAuth = (data) => userReq.post("/checkAuth", data, {
    withCredentials: true,
})

export const apiGetMovieCategory = (type) => movieInfoReq.get(`/${type}`, {
    withCredentials: true,
})

export const apiGetMovieById = (id) => movieInfoReq.get(`/movie_detail/${id}`, {
    withCredentials: true,
})
export const apiGetMovieTrailerById = (id) => movieInfoReq.get(`/movie_trailer/${id}`, {
    withCredentials: true,
})
export const apiGetMovieCastById = (id) => movieInfoReq.get(`/movie_cast/${id}`, {
    withCredentials: true,
})
export const apiGetMoviePromote = () => movieInfoReq.get(`/movie_promote`, {
    withCredentials: true,
})