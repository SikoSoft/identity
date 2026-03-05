import { IdentityResult, Introspection } from "../models/Identity";
import { Api } from "./Api";
export declare const api: Api;
export declare class Identity {
    static introspect(accessToken: string): Promise<IdentityResult<Introspection>>;
    static getRoles(accessToken: string): Promise<IdentityResult<string[]>>;
    static hasRole(accessToken: string, role: string): Promise<IdentityResult<boolean>>;
}
//# sourceMappingURL=Identity.d.ts.map