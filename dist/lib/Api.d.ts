import { ApiConfig, ApiResult } from "../models/Api";
export declare class Api {
    private config;
    private authToken;
    constructor(config: ApiConfig);
    httpRequest<ResponseType>(path: string, config: RequestInit): Promise<ApiResult<ResponseType>>;
    get<ResponseType>(path: string, config?: RequestInit): Promise<ApiResult<ResponseType>>;
    post<RequestType, ResponseType>(path: string, body: RequestType, config?: RequestInit): Promise<ApiResult<ResponseType>>;
    put<RequestType, ResponseType>(path: string, body: RequestType, config?: RequestInit): Promise<ApiResult<ResponseType>>;
    delete<ResponseType>(path: string, config?: RequestInit): Promise<ApiResult<ResponseType>>;
    setAuthToken(authToken: string): void;
}
export declare const api: Api;
//# sourceMappingURL=Api.d.ts.map