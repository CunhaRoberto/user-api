/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })


const schemaUsers = {
  type: 'object',
  properties: {
    idBus: {
      type: 'string',
      format: 'uuid'
    },
    idRoute: {
      type: 'string',
      format: 'uuid'
    }
  },
  required: [
    // 'startDate',
    // 'finishDate',
    // 'idBus',
    // 'idRoute'
    
  ],
  additionalProperties: true
}

async function validate(data) {
   
  const validateTravel = ajv.compile(schemaUsers)
  const result = validateTravel(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validateTravel.errors))
}

export default {
  validate
}
