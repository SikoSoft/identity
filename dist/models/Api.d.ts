export interface ApiResponse<ResponseBodyType> {
    status: number;
    response: ResponseBodyType;
}
export type ApiResult<ResponseBodyType> = ApiResponse<ResponseBodyType> | null;
export declare const emptyResponseCodes: number[];
export interface RequestConfig {
    method: string | undefined;
    headers: HeadersInit;
    body: BodyInit;
}
export interface ApiConfig {
    authToken: string;
    baseUrl: string;
    errorHandler: () => void;
}
//# sourceMappingURL=Api.d.ts.map