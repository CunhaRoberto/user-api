/* eslint-disable no-param-reassign */

import Ajv from 'ajv'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'

let ajv = new Ajv({ allErrors: true, jsonPointers: true })


const schemaUsers = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }  
  },
  required: [
    
  ],
  additionalProperties: true
}

async function validate(data) {
   
  const validateUsers = ajv.compile(schemaUsers)
  const result = validateUsers(data)

  if (result) {
    return result
  }

  throw new InvalidParameterException(JSON.stringify(validateUsers.errors))
}

export default {
  validate
}
