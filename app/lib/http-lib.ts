// class based on the fetch api
export class HttpLib {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor(baseUrl: string, headers: Record<string, string> = {}) {
        this.baseUrl = baseUrl.replace(/\/+$/, "");
        this.headers = { ...headers };
    }

    async get<T>(path: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${path.replace(/^\/+/, "")}`, {
            ...options,
            method: "GET",
            headers: { ...this.headers, ...options.headers },
        });
        if (!response.ok) {
            throw new Error(`GET ${path} failed: ${response.status} ${response.statusText}`);
        }
        return response.json() as Promise<T>;
    }
}
