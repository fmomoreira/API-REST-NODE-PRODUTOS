export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'REST API with Node.js',
    version: '1.0.0',
    description: 'API documentation for the Node.js REST API'
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  paths: {
    '/auth/register': {
      post: {
        tags: ['Authentication'],
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string', minLength: 6 }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'User created successfully'
          }
        }
      }
    },
    '/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'Login user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Login successful'
          }
        }
      }
    },
    '/users/me': {
      get: {
        tags: ['Users'],
        summary: 'Get authenticated user data',
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: 'User data retrieved successfully'
          }
        }
      }
    },
    '/products': {
      get: {
        tags: ['Products'],
        summary: 'List all products (Public)',
        responses: {
          200: {
            description: 'List of products'
          }
        }
      },
      post: {
        tags: ['Products'],
        summary: 'Create a new product (Requires authentication)',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  description: { type: 'string' },
                  code: { type: 'string' }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Product created successfully'
          }
        }
      }
    }
  }
};
