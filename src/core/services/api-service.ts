import type { CorsProxyResponse } from '../models/cors-proxy-response'
import type { RequestOptions } from '../models/request-options'

class ApiService {
  private readonly baseUrl: string
  private readonly defaultHeaders: Record<string, string>

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      'Accept-Language': 'es-ES'
    }
  }

  async get<T>(url: string, options?: RequestOptions): Promise<T> {
    const corsFreeUrl = this.getCorsFreeUrl(url, options)
    const response = await fetch(corsFreeUrl, {
      method: 'GET',
      headers: {
        ...this.getDefaultHeaders(),
        ...(options?.headers ?? {})
      }
    })

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.statusText,
        `Error ${response.status}: ${response.statusText}`
      )
    }

    const data = await response.json()

    if (options?.useCorsProxy) {
      return this.handleCorsProxyData<T>(data, response.status)
    }

    return data
  }

  private handleCorsProxyData<T>(data: CorsProxyResponse, status: number): T {
    if (data.status.http_code !== 200) {
      throw new ApiError(
        data.status.http_code,
        'Failed to fetch data through CORS Proxy',
        `CORS Proxy response status: ${data.status.http_code}`
      )
    }

    try {
      return JSON.parse(data.contents)
    } catch (error) {
      throw new ApiError(status, 'Failed to parse JSON', `Error in JSON.parse: ${error}`)
    }
  }

  private getCorsFreeUrl(url: string, options?: RequestOptions): string {
    const requestUrl = `${this.baseUrl}/${url}${this.getQueryString(options)}`
    if (options?.useCorsProxy) {
      return `https://api.allorigins.win/get?url=${encodeURIComponent(requestUrl)}`
    }
    return requestUrl
  }

  private getQueryString(options?: RequestOptions): string {
    if (!options || !options.params) return ''
    const params = new URLSearchParams(options.params)
    return `?${params.toString()}`
  }

  private getDefaultHeaders(): Record<string, string> {
    return {
      ...this.defaultHeaders
    }
  }
}

const baseUrl = 'https://itunes.apple.com'
const apiService = new ApiService(baseUrl)

export { apiService }
