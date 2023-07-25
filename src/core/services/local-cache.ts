export const TIME_STAMP_FOR_DEFAULT = 24 * 60 * 60 * 1000 // un dia

export class LocalCache {
  constructor(private readonly key: string, private readonly timeout = TIME_STAMP_FOR_DEFAULT) {}

  get<T>(id: string): T | null {
    const cachedData = localStorage.getItem(this.key)
    const timestamp = localStorage.getItem(`${this.key}:timestamp`)

    if (!cachedData || !timestamp) {
      return null
    }

    const now = new Date().getTime()
    const timeDifference = now - Number(timestamp)

    if (timeDifference < this.timeout) {
      const data = JSON.parse(cachedData)
      return data[id] || null
    }

    return null
  }

  set<T>(id: string, data: T) {
    const cachedData = localStorage.getItem(this.key)

    const dataObj = cachedData ? JSON.parse(cachedData) : {}
    dataObj[id] = data

    localStorage.setItem(this.key, JSON.stringify(dataObj))
    localStorage.setItem(`${this.key}:timestamp`, String(new Date().getTime()))
  }
}
