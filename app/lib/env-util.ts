function getEnv(key: string): string | null {
    return import.meta.env[key] || null;
}

export function getEnvOrThrow(key: string): string {
    const value = getEnv(key);
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}