import {blogApi} from '../../api/services/api';

import GetUserByIdService from './GetUserByIdService';

interface PostObject {
  id?: number;
  title: string;
  date: string;
  products: number[];
  content: string;
  author: string;
}

export default class GetPostByUserIdService {

  public async execute(id: string) : Promise<PostObject[] | undefined>{

    try {

      const { data } = await blogApi.get<PostObject[]>(`/posts`);
      const getUserByIdService = new GetUserByIdService();

      const user = await getUserByIdService.execute(id);


      const allowedPosts: PostObject[] = [];

      data.map(element => {
        const havePermission = element.products.indexOf(user?.product_id as number)
        if (havePermission > -1) allowedPosts.push(element);
      })

      return allowedPosts;

    } catch (error) {

      throw error;

    }
  }
}
