# Movie Browser

A React Router app for browsing movies (TMDB), with genre filtering and sorting.

## Environment variables

Copy the example env file and fill in your TMDB API key:

```bash
cp .env.example .env
```

```
VITE_API_KEY=your_tmdb_api_key
VITE_API_BASE_URL=https://api.themoviedb.org
```

These are Vite env vars, baked into the client bundle at **build time** — `.env` must exist before you run `npm run build` or `docker build`, not just before `npm run dev`/`start`.

## Run with npm

Requires Node 24+.

```bash
npm install
npm run dev       # http://localhost:5173, with HMR
```

Production build:

```bash
npm run build
npm run start     # http://localhost:3000
```

## Run with Docker

```bash
docker build -t movie-browser .
docker run -p 3000:3000 movie-browser
```

`.env` must be present in this directory before `docker build` — it gets copied into the image and compiled into the build there. The image has no way to pick up env vars at `docker run` time for this.

App: `http://localhost:3000`
