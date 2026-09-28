import type { Movie, SortBy } from "@/types/movie";
import { movieInstance } from "@/lib/movie-lib";
import { getEnvOrThrow } from "~/lib/env-util";



interface DiscoverResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

const API_KEY = getEnvOrThrow("VITE_API_KEY");
export async function getMovies(genreId?: number, sortBy?: SortBy) {
    const params = new URLSearchParams({ api_key: API_KEY });
    if (genreId) params.set("with_genres", String(genreId));
    if (sortBy) params.set("sort_by", sortBy);
    const { results } = await movieInstance.get<DiscoverResponse>(`3/discover/movie?${params}`);
    return results;
}
