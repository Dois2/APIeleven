import {Router} from 'express';
import productsRouter from '../../../../modules/products/infra/http/routes/products.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use( '/api/v1/products', productsRouter );
routes.use( '/api/v1/user', usersRouter );

export default routes;
