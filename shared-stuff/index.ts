export interface User {
    name: string;
    age: number;
    admin: boolean;
    uid: string;
}

export function createID() {
  return 'MYAPP-' + Date.now().toString();
}