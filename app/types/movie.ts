export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type SortBy =
  | null
  | "original_title.asc"
  | "original_title.desc"
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "title.asc"
  | "title.desc"
  | "primary_release_date.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export const SORT_BY_OPTIONS: { label: string; value: SortBy }[] = [
  { label: "Original Title (A-Z)", value: "original_title.asc" },
  { label: "Original Title (Z-A)", value: "original_title.desc" },
  { label: "Popularity (Low to High)", value: "popularity.asc" },
  { label: "Popularity (High to Low)", value: "popularity.desc" },
  { label: "Revenue (Low to High)", value: "revenue.asc" },
  { label: "Revenue (High to Low)", value: "revenue.desc" },
  { label: "Release Date (Oldest)", value: "primary_release_date.asc" },
  { label: "Title (A-Z)", value: "title.asc" },
  { label: "Title (Z-A)", value: "title.desc" },
  { label: "Release Date (Newest)", value: "primary_release_date.desc" },
  { label: "Vote Average (Low to High)", value: "vote_average.asc" },
  { label: "Vote Average (High to Low)", value: "vote_average.desc" },
  { label: "Vote Count (Low to High)", value: "vote_count.asc" },
  { label: "Vote Count (High to Low)", value: "vote_count.desc" },
];
