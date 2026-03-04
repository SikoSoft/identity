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
