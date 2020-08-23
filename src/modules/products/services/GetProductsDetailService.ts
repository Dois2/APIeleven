import {dataLakeApi} from '../../api/services/api';


interface Response {
  product: Product;
}

interface Product {
  id: number;
  name: string;
}

export default class GetProductsDetailService {

  public async execute(id: string) : Promise<Response | undefined>{

    try {

      const apiResponse = await dataLakeApi.get(`/products/${id}`);

      let response: Response = {
        product : apiResponse.data
      }


      return response;
    } catch (error) {
      throw error;
    }

  }
}
