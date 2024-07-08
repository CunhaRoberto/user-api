export default
{

  '/v1/embarkation/': {
    post: {
      summary: 'Create embarkation',
      tags: ['Transport'],
      description: 'Create embarkation',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'description',
          require: 'require',
          schema: {
            type: 'object',
            properties: {
                name: {
                type: 'string',
                require: true,
                example: 'Base Pol Rodoviária - São Carlos'
              }
            }
          }
        }
      ],
      responses: {
        201: {
          description: 'Created successfully'
        },
        400: {
          description: 'Bad request'
        },
        404: {
          description: 'Not found'
        },
        409: {
          description: 'Conflict'
        },
        500: {
          description: 'Internal Server Error'
        }
      }
      },
    get: {
      summary: 'Search embarkation',
      description: 'Search embarkation',
      tags: ['Transport'],
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: false,
          type: 'string'
        }
      ],
      responses: {
        200: {
          description: 'Located successfully'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },
        409: {
          description: 'Conflict, already exists'
        },
        500: {
          description: 'Internal server Error'
        }
      }
    }
  }
}



