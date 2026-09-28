import { MovieCard } from "@/components/movie-card";
import { MovieGrid } from "@/components/movie-grid";
import type { Movie } from "@/types/movie";
import { useMovieContext } from "~/hooks/useMovieContext";
import { Loader2 } from "lucide-react";

export default function Movies() {
  const { movies, loading, error } = useMovieContext();

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center gap-2 text-blue-500">
        <Loader2 className="size-8 animate-spin" /> Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-64 items-center justify-center text-destructive">
        {error}
      </div>
    );
  }

  return (
    <MovieGrid>
      {movies.length === 0 && <div className="col-span-full flex justify-center items-center min-h-64 text-gray-500">
        No movies found
      </div>}
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
}
