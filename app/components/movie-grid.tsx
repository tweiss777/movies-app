import type { ReactNode } from "react";
import { useMovieContext } from "~/hooks/useMovieContext";
import { GenreSelect } from "@/components/genre-select";
import { SortSelect } from "@/components/sort-select";

interface MovieGridProps {
  children: ReactNode;
}

export function MovieGrid({ children }: MovieGridProps) {
  const { genres, selectedGenre, setSelectedGenre, sortBy, setSortBy } = useMovieContext();
  return (
    <div className="m-3 flex flex-col gap-4 sm:m-5">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <GenreSelect genres={genres} value={selectedGenre} onChange={setSelectedGenre} />
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
