import {Router} from 'express';

import ProductsController from '../controllers/ProductsController';



const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/:id', productsController.getProductsDetail);
productsRouter.get('/', productsController.getProductsSummary);


export default productsRouter;
