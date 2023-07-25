# h-podcast

Este proyecto fue desarrollado con Vue 3 en Vite.

Puedes echarle un vistazo: [h-podcast](https://hamelhmc.github.io/h-podcast/)

## Configuración del proyecto

```sh
# Clona el repositorio
git clone https://github.com/hamelhmc/h-podcast.git

# Navega al directorio del proyecto
cd h-podcast

# Instala las dependencias
npm install
```

### Ejecutar pruebas unitarias con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Ejecutar pruebas de extremo a extremo con [Playwright](https://playwright.dev)

```sh
# Instala los navegadores para la primera ejecución
npx playwright install

# Cuando se prueba en CI, debe construir el proyecto primero
npm run build

# Ejecuta las pruebas de extremo a extremo
npm run test:e2e
# Ejecuta las pruebas solo en Chromium
npm run test:e2e -- --project=chromium
# Ejecuta las pruebas de un archivo específico
npm run test:e2e -- tests/example.spec.ts
# Ejecuta las pruebas en modo de depuración
npm run test:e2e -- --debug
```
