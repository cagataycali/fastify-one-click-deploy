'use strict'
// Example from quickstart fastify.io
const fastify = require('fastify')()

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify
  .get('/', schema, function (req, reply) {
    reply
      .send({ hello: 'world' })
  })

fastify.listen(process.env.PORT || 3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
