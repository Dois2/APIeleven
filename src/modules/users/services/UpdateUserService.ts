import {dataLakeApi} from '../../api/services/api';

interface UserObject {
  id?: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  product_id: number;
}

export default class UpdateUserService {

  public async execute(id: string, newUser : UserObject) : Promise<UserObject | undefined>{

    try {

      const { data } = await dataLakeApi.put<UserObject>(`/user/${id}`, newUser );
      return data;

    } catch (error) {

      throw error;

    }

  }
}
