import {Router} from 'express';

import UsersController from '../controllers/UsersController';

const userRouter = Router();
const usersController = new UsersController();

userRouter.post('/', usersController.createUser);
userRouter.get('/', usersController.getUser);
userRouter.get('/:id', usersController.getUserById);
userRouter.put('/:id', usersController.updateUser);
userRouter.get('/:id/posts', usersController.getUserPost);
userRouter.get('/:id/posts/:postId', usersController.getPostById);

export default userRouter;
