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
                idRota: {
                type: 'string',
                require: true,
                example: '95af06d5-56c5-435a-a8e9-8fe1201c3721'
              },
              idBus: {
                type: 'string',
                require: true,
                example: '95af06d5-56c5-435a-a8e9-8fe1201c3721'
              },
              dataPartida: {
                type: 'string',
                require: true,
                example: '2024-07-12T12:00:34.493Z'
              },
              dataChegada: {
                type: 'string',
                require: true,
                example: '2024-07-12T21:00:34.493Z'
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
  '/v1/travel/id': {
      get: {
        summary: 'Search travel',
        description: 'Search travel',
        tags: ['Travel'],
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
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
          500: {
            description: 'Internal server Error'
          }
        }
        },
      put: {
        summary: 'Update travel',
        description: 'Update travel',
        tags: ['Travel'],
        parameters: [
          {
            in: 'query',
            name: 'id',
            description: 'travel id',
            required: true,
            type: 'string'
          },
          {
            name: 'name',
            in: 'query',
            required: false,
            type: 'string'
          },
          {
            name: 'cpf',
            in: 'query',
            required: false,
            description: 'CPF - eleven characters ( only number)',
            example: '12312312399',
            type: 'string'
          },
          {
            name: 'cellPhone',
            in: 'query',
            required: false,
            example: '1192345678',
            description: 'DDD with two numbers + telephone with nine numbers starting with 9',
            type: 'string'
          },
          {
            name: 'email',
            in: 'query',
            required: false ,
            example: 'teste@teste.com' ,
            type: 'string'
          },
          
        ],
        responses: {
          200: {
            description: 'Updated successfully'
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
            description: 'Internal server Error'
          }
        }
      },
      delete: {
        summary: "Remove travel",
        description: "Delete travel",
        tags: ["Travel"],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "Travel Id",
            required: true,
            type: "string",
            format: "uuid"
          }
        ],
        responses: {
            200: {
              description: "Deleted successfully",
            },
            400: {
              description: "Bad Request",
            },
            404: {
              description: "Not found",
            },
            500: {
              description: "Internal Server Error",
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



