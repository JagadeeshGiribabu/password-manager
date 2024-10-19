export interface Password {
    id?: string; 
    category: string;
    app: string;
    userName: string;
    encryptedPassword: string;
    decriptedPassword?: string;
    show?: boolean;
  }