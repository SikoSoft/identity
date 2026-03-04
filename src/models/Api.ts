export interface ApiResponse<ResponseBodyType> {
  status: number;
  response: ResponseBodyType;
}

export type ApiResult<ResponseBodyType> = ApiResponse<ResponseBodyType> | null;

export const emptyResponseCodes = [202, 204];

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
