export default
{
  //user module
  '/v1/user/': {
    post: {
      summary: 'Create user',
      tags: ['Users'],
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
          description: 'User created successfully'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },

        500: {
          description: 'Internal Server Error'
        }
      }
      }
    }  
}



