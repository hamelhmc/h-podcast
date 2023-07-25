interface Status {
  url: string
  content_type: string
  http_code: number
  response_time: number
  content_length: number
}

export interface CorsProxyResponse {
  contents: string
  status: Status
}
