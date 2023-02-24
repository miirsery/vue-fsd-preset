import axios from 'axios'

import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { AxiosResponseType } from '@/shared/api/AxiosService/AxiosInstance.type'

export class AxiosService {
  private axiosInstance!: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)

    this.axiosInstance.interceptors.request.use((config: any) => {
      const token = localStorage.getItem('token') || ''

      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        }
      }

      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response: any) => {
        const status = response?.status

        switch (status) {
          case 201:
            break
          default:
            break
        }

        return response
      },
      (error: any) => {
        const response = error?.response?.data

        switch (error?.response?.status) {
          case 401:
            break
          case 403:
            break
          case 404:
            break
          case 422:
            break
          case 500:

          default:
            break
        }

        return Promise.reject(response)
      }
    )
  }

  protected async axiosCall<T = unknown>(config: AxiosRequestConfig): AxiosResponseType<T> {
    try {
      const { data } = await this.axiosInstance.request<T>(config)

      return [null, data]
    } catch (error: any) {
      return [error]
    }
  }
}
