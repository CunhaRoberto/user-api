export default
{
  '/v1/routes/': {
    post: {
      summary: 'Create routes',
      tags: ['Routes'],
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
      tags: ['Routes'],
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
      tags: ['Routes'],
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
      tags: ['Routes'],
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
  '/v1/travel/': {
    post: {
      summary: 'Create travel',
      tags: ['Travel'],
      description: 'Create travel',
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
      summary: 'Search travel',
      description: 'Search travel',
      tags: ['Travel'],
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
  '/v1/bus/': {
    post: {
      summary: 'Create bus',
      tags: ['Bus'],
      description: 'Create bus',
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
      summary: 'Search bus',
      description: 'Search bus',
      tags: ['Bus'],
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
}



