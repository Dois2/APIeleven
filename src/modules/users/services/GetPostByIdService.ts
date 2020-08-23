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

  public async execute(postId: string) : Promise<PostObject | undefined>{

    try {

      const { data } = await blogApi.get<PostObject>(`/posts/${postId}`);
      console.log("GetPostByUserIdService -> data", data)
      return data;

    } catch (error) {

      throw error;

    }
  }
}
