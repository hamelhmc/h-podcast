export function formatearFecha(fecha: string): string {
  try {
    const formateador = new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
    return formateador.format(new Date(fecha))
  } catch (error) {
    return 'Fecha inválida'
  }
}
