export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export type TCreateEditUser = Omit<IUser, 'id'>;
