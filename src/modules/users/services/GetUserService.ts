import {dataLakeApi} from '../../api/services/api';

interface UserObject {
  id?: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  product_id: number;
}

export default class GetUserService {

  public async execute() : Promise<UserObject[] | undefined>{

    try {

      const { data } = await dataLakeApi.get<UserObject[]>(`/user`);
      return data;

    } catch (error) {

      throw error;

    }

  }
}
