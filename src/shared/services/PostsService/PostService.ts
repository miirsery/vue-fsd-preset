import type { AxiosRequestConfig } from 'axios'
import { AxiosService } from '@/shared/api/AxiosService/AxiosService'

export class PostService extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  getAll = async <T = unknown>() => {
    return this.axiosCall<T>({
      method: 'get',
      url: '',
    })
  }
}

export default new PostService({
  baseURL: '/api/posts',
  withCredentials: false,
})
