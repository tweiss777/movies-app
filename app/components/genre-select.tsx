import type { Genre } from "@/types/genre";
import { Select } from "@/components/ui/select";

interface GenreSelectProps {
  genres: Genre[];
  value: Genre;
  onChange: (genre: Genre) => void;
}

export function GenreSelect({ genres, value, onChange }: GenreSelectProps) {
  return (
    <Select
      className="w-full"
      value={String(value.id)}
      onChange={(e) => {
        const genre = genres.find((g) => String(g.id) === e.target.value);
        if (genre) onChange(genre);
      }}
    >
      {genres.map((genre) => (
        <option key={String(genre.id)} value={String(genre.id)}>
          {genre.name}
        </option>
      ))}
    </Select>
  );
}
