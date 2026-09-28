export type Genre = {
    id: number;
    name: string;
} | {
    id: null;
    name: "All";
}