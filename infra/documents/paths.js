import healthCheck from './paths/healthCheck.js'
import user from './paths/user.js'
import authentication from './paths/authentication.js'
import property from './paths/property.js'


let paths = Object.assign(
  healthCheck,
  user,
  authentication,
  property
)

export default paths
