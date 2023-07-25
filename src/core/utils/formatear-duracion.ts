export function formatearDuracion(milisegundos: number): string {
  const hours = Math.floor(milisegundos / 3600000)
  const minutes = Math.floor((milisegundos % 3600000) / 60000)
  const seconds = Number(((milisegundos % 60000) / 1000).toFixed(0))
  return `${hours ? `${hours}:` : ''}${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
}
