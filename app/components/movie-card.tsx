import type { Movie } from "~/types/movie";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { FilmIcon } from 'lucide-react';
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className=" overflow-hidden py-0 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="h-100 aspect-2/3 w-full bg-muted">
        {movie.poster_path ? (
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            <FilmIcon className="h-10 w-10" />
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
      </CardContent>
      <CardFooter className="pb-4 text-sm text-muted-foreground">
        ⭐ {movie.vote_average.toFixed(1)}
      </CardFooter>
    </Card>
  );
}
