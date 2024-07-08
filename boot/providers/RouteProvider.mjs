import healthCheck from '../../src/maintenance/healthcheck.mjs'
import user from '../../src/user/routes.mjs'
import authentication from '../../src/authentication/routes.mjs'
import transport from '../../src/transport/routes.mjs'
import wrongWay from '../../src/maintenance/wrongWay.mjs'

function registerRoutes(app) {
  app.use(healthCheck)  
  app.use(user)
  app.use(authentication)
  app.use(transport)
  app.use(wrongWay)
}

export default {
  boot: (app) => {
    registerRoutes(app)
  }
}
