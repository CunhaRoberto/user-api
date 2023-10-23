export default
{
  //user module
  '/v1/user/': {
    post: {
      summary: 'Create user',
      tags: ['User'],
      description: 'Create user',
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
                example: 'Sophia Cunha'
              },
              cpf: {
                type: 'string',
                require: true,
                example: '12345678900'
              },
              email: {
                type: 'string',
                require: true,
                example: 'sophia@email.com'
              },
              celular: {
                type: 'string',
                require: true,
                example: '11912345678'
              },
              password: {
                type: 'string',
                require: true,
                minLength: 6,
                maxLength: 10,
                example: '125@Teste'
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
      }
    },
    '/v1/user/id': {
      put: {
        summary: 'Update user',
        description: 'Update user',
        tags: ['User'],
        parameters: [
          {
            in: 'query',
            name: 'id',
            description: 'user id',
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
      }
    } 
}



