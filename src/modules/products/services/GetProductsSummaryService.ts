import {dataLakeApi} from '../../api/services/api';


interface Response {
  products: Product[];
}

interface Product {
  id: number;
  name: string;
}

export default class GetProductsSummaryService {

  public async execute() : Promise<Response | undefined>{

    try {

      const apiResponse = await dataLakeApi.get('/products');

      let response: Response = {
        products : apiResponse.data
      }


      return response;
    } catch (error) {
      console.log("GetProductsSummaryService -> error", error);
      throw error;
    }

  }
}
