export default
{
  //property module
  '/property/': {
    post: {
      summary: 'Create property with photos',
      tags: ['Property'],
      description: 'Create property with up to 6 photos',
      consumes: [
        'multipart/form-data'
      ],
      parameters: [
        // {
        //   in: 'formData',
        //   name: 'idOwner',
        //   type: 'string',
        //   format: "uuid",
        //   required: true,
        //   description: 'Owner id',
        //   example: 'Casa Aconchegante'
        // },
        {
          in: 'formData',
          name: 'zipCode',
          type: 'string',
          required: true,
          description: 'zip code',
          example: '15024215'
        },
        {
          in: 'formData',
          name: 'photo',
          type: 'array',
          items: {
            type: 'file'
          },
          collectionFormat: 'multi',
          description: 'One or more property photos. You can upload up to 6 photos using multiple instances of this field (e.g., photo1, photo1, photo1...).'
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
      summary: 'Search properties',
      description: 'Search properties',
      tags: ['Property'],

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
  },
  '/property/id': {
    get: {
      summary: 'Search property by id',
      description: 'Search property by id',
      tags: ['Property'],
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
    // put: {
    //   summary: 'Update property',
    //   description: 'Update property',
    //   tags: ['Property'],
    //   parameters: [
    //     {
    //       in: 'query',
    //       name: 'idOwner',
    //       description: 'owner id',
    //       required: true,
    //        type: "string",
    //       format: "uuid"
    //     },
    //     {
    //       name: 'zip code',
    //       in: 'query',
    //       required: false,
    //       type: 'string'
    //     },
    //     {
    //       name: 'cpf',
    //       in: 'query',
    //       required: false,
    //       description: 'CPF - eleven characters ( only number)',
    //       example: '12312312399',
    //       type: 'string'
    //     },
    //     {
    //       name: 'cellPhone',
    //       in: 'query',
    //       required: false,
    //       example: '1192345678',
    //       description: 'DDD with two numbers + telephone with nine numbers starting with 9',
    //       type: 'string'
    //     },
    //     {
    //       name: 'email',
    //       in: 'query',
    //       required: false ,
    //       example: 'teste@teste.com' ,
    //       type: 'string'
    //     },

    //   ],
    //   responses: {
    //     200: {
    //       description: 'Updated successfully'
    //     },
    //     400: {
    //       description: 'Bad request'
    //     },
    //     404: {
    //       description: 'Not found'
    //     },
    //     409: {
    //       description: 'Conflict'
    //     },
    //     500: {
    //       description: 'Internal server Error'
    //     }
    //   }
    // },
    // delete: {
    //   summary: "Remove property",
    //   description: "Delete property",
    //   tags: ["Property"],
    //   parameters: [
    //     {
    //       in: "query",
    //       name: "id",
    //       description: "Property Id",
    //       required: true,
    //       type: "string",
    //       format: "uuid"
    //     }
    //   ],
    //   responses: {
    //     200: {
    //       description: "Deleted successfully",
    //     },
    //     400: {
    //       description: "Bad Request",
    //     },
    //     404: {
    //       description: "Not found",
    //     },
    //     500: {
    //       description: "Internal Server Error",
    //     }
    //   }
    // }
  }
}