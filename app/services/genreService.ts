import { movieInstance } from "@/lib/movie-lib";
import { getEnvOrThrow } from "@/lib/env-util";
import type { Genre } from "@/types/genre";

const API_KEY = getEnvOrThrow("VITE_API_KEY");
type GenreResponse = {
    genres: Genre[];
}
export async function getGenres() {
    const genres = await movieInstance.get<GenreResponse>(`3/genre/movie/list?language=en&api_key=${API_KEY}`);
    return genres.genres;
}