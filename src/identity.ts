export interface Identity {
  id: string;
  name: string;
}

export function createIdentity(id: string, name: string): Identity {
  return { id, name };
}
