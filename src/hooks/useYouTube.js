import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchYouTube = (id) => {
    return api.get(`/movie/${id}/videos`)
}

export const useYouTubeQuery = (id) => {
    return useQuery({
        queryKey: ['movie-youtube', id],
        queryFn: () => fetchYouTube(id),
        select: (result) => result.data
    })
}