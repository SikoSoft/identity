import { Introspection } from "../models/Identity";
import { api } from "./Api";

export class Identity {
  static async introspect(): Promise<void> {
    console.log("Introspecting identity...");
    await new Promise<void>((resolve) => resolve());

    const result = await api.get<Introspection>("/user/introspect");

    if (result) {
      console.log("Introspection result:", result);
      return;
    }

    

  }
}
