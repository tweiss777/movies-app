import { getEnvOrThrow } from "./env-util";
import { HttpLib } from "./http-lib";

const API_BASE_URL = getEnvOrThrow("VITE_API_BASE_URL");

export const movieInstance = new HttpLib(API_BASE_URL);