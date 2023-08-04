import {IMapper} from "@app-core/interfaces/mapper.interface";
import {IUser} from "@app-core/interfaces/user.interface";
import {IUserApi} from "src/app/data/interfaces/user.api.interface";

export class UserMapper implements IMapper<IUserApi, IUser> {
  public fromApi(userApi: IUserApi): IUser {
    return {
      id: userApi.id,
      firstName: userApi.first_name,
      lastName: userApi.last_name,
      email: userApi.email,
      avatar: userApi.avatar,
    }
  }
  public fromApiMultiple(usersApi: IUserApi[]): IUser[] {
    return usersApi.map((userApi: IUserApi) => this.fromApi(userApi));
  }
}
