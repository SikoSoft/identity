"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = exports.api = void 0;
const Api_1 = require("./Api");
exports.api = new Api_1.Api({
    authToken: "",
    baseUrl: process.env.AUTH_SERVER || "",
    errorHandler: () => {
        console.error("Api encountered an error");
    },
});
class Identity {
    static async introspect(accessToken) {
        exports.api.setAuthToken(accessToken);
        const result = await exports.api.get("user/introspect");
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
    static async getRoles(accessToken) {
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
    static async hasRole(accessToken, role) {
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
exports.Identity = Identity;
//# sourceMappingURL=Identity.js.map