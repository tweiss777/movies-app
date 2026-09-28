import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Movie, SortBy } from "@/types/movie";
import type { Genre } from "@/types/genre";
import { getMovies } from "@/services/movieService";
import { getGenres } from "@/services/genreService";

interface MovieContextType {
    movies: Movie[];
    genres: Genre[];
    selectedGenre: Genre;
    sortBy: SortBy;
    setSelectedGenre: (genre: Genre) => void;
    setSortBy: (sortBy: SortBy) => void;
    loading: boolean;
    error: string | null;
}

export const MovieContext = createContext<MovieContextType | null>(null);

interface MovieProviderProps {
    children: ReactNode;
}

export function MovieProvider({ children }: MovieProviderProps) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre>({ id: null, name: "All" });
    const [sortBy, setSortBy] = useState<SortBy>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    (async() => {
        try{
        setError(null);
        setLoading(true);
        const [movies, genres] = await Promise.all([getMovies(), getGenres()]);
        setMovies(movies);
        setGenres(genres);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    })();

  }, []);

  useEffect(() => {
    (async() => {
        try{
        setError(null);
        setLoading(true);
        const args = [];
        if (selectedGenre.id !== null) {
            args.push(selectedGenre.id);
        }
        if (sortBy) {
            args.push(sortBy);
        }
        const movies = await getMovies(...(args as [number, SortBy]));
        setMovies(movies);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    })();
  }, [selectedGenre, sortBy])



    return <MovieContext.Provider value={{ movies, genres, selectedGenre, sortBy, setSelectedGenre, setSortBy, loading, error }}>
        {children}
    </MovieContext.Provider>
}

