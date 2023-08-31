import {IMapper} from "@app-core/interfaces/mapper.interface";
import {IUser} from "@app-core/interfaces/user.interface";
import {IUserUpdateApi} from "src/app/data/interfaces/user.api.interface";

export class UserUpdateMapper implements IMapper<IUserUpdateApi, IUser> {
  public fromApi(userApi: IUserUpdateApi): IUser {
    return {
      id: userApi.id,
      firstName: userApi.firstName,
      lastName: userApi.lastName,
      email: userApi.email,
      avatar: userApi.avatar,
    }
  }
  public fromApiMultiple(usersApi: IUserUpdateApi[]): IUser[] {
    return usersApi.map((userApi: IUserUpdateApi) => this.fromApi(userApi));
  }
}
