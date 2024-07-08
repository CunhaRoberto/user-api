import healthCheck from './paths/healthCheck.js'
import user from './paths/user.js'
import authentication from './paths/authentication.js'
import transport from './paths/transport.js'

let paths = Object.assign(
  healthCheck,
  user,
  authentication,
  transport

)

export default paths
