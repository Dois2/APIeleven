import { Request, Response, response} from 'express';

import CreateUserService  from '../../../services/CreateUserService';
import GetUserService     from '../../../services/GetUserService';
import GetUserByIdService     from '../../../services/GetUserByIdService';
import UpdateUserService     from '../../../services/UpdateUserService';
import GetPostByUserIdService    from '../../../services/GetPostByUserIdService';
import GetPostByIdService    from '../../../services/GetPostByIdService';




export default class UsersController {

  public async createUser(request: Request, response : Response) : Promise<Response> {
    try {

      const { body } = request;
      const createUserservice = new CreateUserService();

      const userCreated = await createUserservice.execute(body);

      return response.status(201).json(userCreated);


    } catch (error) {
      return response.status(400).json({"error": error});
    }
  }

  public async getUser(request: Request, response: Response): Promise<Response>{

    try {


      const getUserService = new GetUserService();


      const users = await getUserService.execute();

      const res = {
        users
      }


      return response.json(res);
    } catch (error) {
      return response.status(400).json({"error": error});
    }
  }

  public async getUserById(request: Request, response: Response): Promise<Response>{

    try {

      const {id} = request.params;
      const getUserByIdService = new GetUserByIdService();
      const user = await getUserByIdService.execute(id);

      const res = {
        user
      }
      console.log("UsersController -> res", res)

      return response.json(res);
    } catch (error) {
      return response.status(404).json({"error": 'Sorry bud, no user found for this ID!'});
    }
  }

  public async updateUser(request: Request, response: Response): Promise<Response>{


    try {

      const { id } = request.params;
      const { body } = request;
      const updateuserService = new UpdateUserService();

      const updatedUser = await updateuserService.execute(id, body);


      return response.json(body);
    } catch (error) {
      return response.status(404).json({"error": error});
    }
  }

  public async getUserPost(request: Request, response: Response): Promise<Response> {

    try {

      const {id} = request.params;

      const getPostByUserIdService = new GetPostByUserIdService();

      const allowedPosts = await getPostByUserIdService.execute(id);


      return response.json(allowedPosts);
    } catch (error) {
      return response.status(404).json({"error": 'Sorry bud, no user found for this ID!'});
    }


  }

  public async getPostById(request: Request, response: Response): Promise<Response> {
    try {
      const { postId } = request.params;

      const getPostByIdService = new GetPostByIdService();

      const post = await getPostByIdService.execute(postId);

      return response.json({ post });

    } catch (error) {
      return response.status(404).json({"error": "Sorry bud, no post found for this ID!"});
    }
  }


}
