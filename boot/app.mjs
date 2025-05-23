import express from 'express'
import AppProvider from './providers/AppProvider.mjs'
import Application from '../config/app.mjs'
import Compression from './middlewares/Compression.mjs'
import CoreProvider from '../src/core/providers/EventProvider.mjs'
import ExceptionHandler from './exception/ExceptionHandler.mjs'
import QueryString from './middlewares/QueryString.mjs'
import RouteProvider from './providers/RouteProvider.mjs'
import cors from 'cors'
import swaggerDocument from '../infra/documents/swagger.js'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function registerProviders(app) {
  AppProvider.boot(app)
  RouteProvider.boot(app)
  CoreProvider.boot(app)
}

function boot(app) {
  return app.listen(
    Application.port,
    () => {
      console.log(`⚡️ Aplicação inicializada na porta: ${Application.port}.`)
    }
  )
}

export default async (app) => {
  app.use(Compression())
  app.use(cors())
  app.use(QueryString)
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      docExpansion: 'none'
    }
  }))

  // ✅ Servir arquivos estáticos da pasta uploads
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

  await registerProviders(app)

  ExceptionHandler.handle(app)
  boot(app)
}
