import {dataLakeApi} from '../../api/services/api';

interface UserObject {
  id?: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  product_id: number;
}

export default class GetUserByIdService {

  public async execute(id: string) : Promise<UserObject | undefined>{

    try {

      const { data } = await dataLakeApi.get<UserObject>(`/user/${id}`);
      return data;

    } catch (error) {

      throw error;

    }

  }
}
