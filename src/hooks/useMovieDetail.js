import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchDetailMovies = ( id ) => {
    return api.get(`/movie/${id}`)
}

export const useMovieDetailQuery = ( id ) => {
    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => fetchDetailMovies(id),
        select: (result) => result.data
    })
}