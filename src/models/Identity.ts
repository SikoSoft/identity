export interface IntrospectionUser {
  introspection: {
    isLoggedIn: true;
    user: {
      id: string;
      sessionId: string;
      roles: string[];
    };
    expiresAt: Date;
  };
}

export interface IntrospectionAnonymous {
  introspection: {
    isLoggedIn: false;
  };
}

export type Introspection = IntrospectionUser | IntrospectionAnonymous;

export interface IdentityCommonResult {
  isOk: boolean;
}
export interface IdentitySuccessResult<T> extends IdentityCommonResult {
  isOk: true;
  value: T;
}
export interface IdentityFailureResult extends IdentityCommonResult {
  isOk: false;
  error: Error;
}
export type IdentityResult<T> =
  | IdentitySuccessResult<T>
  | IdentityFailureResult;
