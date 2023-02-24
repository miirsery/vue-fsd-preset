import postService from '@/shared/services/PostsService/PostService'
import type { PostType } from '@/app/types/posts.type'
import type { BasePromiseType } from '@/app/types/base.type'

export const getAllPosts = async (): BasePromiseType<PostType[]> => {
  return await postService.getAll<PostType[]>()
}
