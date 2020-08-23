import { dataLakeApi } from '../../api/services/api';


interface Response {
  product: Product;
}

interface Product {
  id: number;
  name: string;
}

interface UserObject {
  id?: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  product_id: number;
}

export default class CreateUserService {

  public async execute(user: UserObject ) : Promise<UserObject | undefined>{

    try {

      const { data } = await dataLakeApi.post<UserObject>(`/user`, user);


      user.id = data.id;

      return user;
    } catch (error) {
      throw error;
    }

  }
}
