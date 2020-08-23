import { Request, Response, response} from 'express';
import GetProductsSummaryService from '../../../services/GetProductsSummaryService';
import GetProductsDetailService from 'modules/products/services/GetProductsDetailService';


export default class ProductsController {

  public async getProductsSummary(request: Request, response : Response) : Promise<Response> {
    try {


      const getProductsSummaryService = new GetProductsSummaryService();
      const res = await getProductsSummaryService.execute()

      return response.json(res);
    }catch (error) {
      return response.status(404).json({error: error});
    }
  }

  public async getProductsDetail(request: Request, response: Response) : Promise<Response> {

    try {
      const { id } = request.params
      const getProductsDetailService = new GetProductsDetailService();


      return response.json(await getProductsDetailService.execute(id));

    } catch (error) {
      return response.status(404).json({error: 'Sorry bud, no product found for this ID!'});
    }
  }
}
