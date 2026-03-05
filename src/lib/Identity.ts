import { IdentityResult, Introspection } from "../models/Identity";
import { Api } from "./Api";

export const api = new Api({
  authToken: "",
  baseUrl: process.env.AUTH_SERVER || "",
  errorHandler: () => {
    console.error("Api encountered an error");
  },
});

export class Identity {
  static async introspect(
    accessToken: string
  ): Promise<IdentityResult<Introspection>> {
    api.setAuthToken(accessToken);
    const result = await api.get<Introspection>("user/introspect");

    if (result && result.response) {
      return {
        isOk: true,
        value: result.response,
      };
    }

    return {
      isOk: false,
      error: new Error("Failed to perform introspection"),
    };
  }

  static async getRoles(
    accessToken: string
  ): Promise<IdentityResult<string[]>> {
    const introspectionRes = await Identity.introspect(accessToken);

    if (!introspectionRes.isOk) {
      return {
        isOk: false,
        error: new Error("Failed to get roles"),
      };
    }

    const { introspection } = introspectionRes.value;

    if (!introspection.isLoggedIn) {
      return {
        isOk: true,
        value: [],
      };
    }

    return {
      isOk: true,
      value: introspection.user.roles,
    };
  }

  static async hasRole(
    accessToken: string,
    role: string
  ): Promise<IdentityResult<boolean>> {
    const rolesRes = await Identity.getRoles(accessToken);

    if (!rolesRes || !rolesRes.isOk) {
      return {
        isOk: false,
        error: new Error("Failed to check if client has role"),
      };
    }

    return {
      isOk: true,
      value: rolesRes.value.includes(role),
    };
  }
}
