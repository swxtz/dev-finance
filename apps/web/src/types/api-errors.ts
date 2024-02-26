export interface ApiError extends Error {
    response: {
        status: number;
        data: {
            message: string;
        };
    };
}