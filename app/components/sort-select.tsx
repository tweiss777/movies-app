import { SORT_BY_OPTIONS, type SortBy } from "@/types/movie";
import { Select } from "@/components/ui/select";

interface SortSelectProps {
  value: SortBy;
  onChange: (sortBy: SortBy) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select
      className="w-full"
      value={value ?? ""}
      onChange={(e) => onChange((e.target.value || null) as SortBy)}
    >
      <option value="">Default</option>
      {SORT_BY_OPTIONS.map((option) => (
        <option key={option.value} value={option.value ?? ""}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
