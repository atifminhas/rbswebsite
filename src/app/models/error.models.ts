export class Error {
    error: {
        ErrorCode: number,
        ErrorMessage: string,
        Result: any,
        StatusCode: number,
        Success: boolean
        Version: string
    };
    headers: any;
    message: string;
    name: string;
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
}
