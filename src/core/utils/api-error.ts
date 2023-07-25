export class ApiError extends Error {
  status: number
  statusText: string

  constructor(status: number, statusText: string, message?: string) {
    super(message)
    this.status = status
    this.statusText = statusText

    Object.setPrototypeOf(this, new.target.prototype)
  }
}
