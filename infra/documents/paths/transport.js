export default
{
  '/v1/routes/': {
    post: {
      summary: 'Create routes',
      tags: ['Transport'],
      description: 'Create routes',
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
                example: 'São José do Rio Preto X São Paulo'
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
      summary: 'Search routes',
      description: 'Search routes',
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
  },

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



