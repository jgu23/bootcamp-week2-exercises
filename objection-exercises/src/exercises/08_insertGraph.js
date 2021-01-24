const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    email: 'jgu3001@gmail.com',
    firstName: 'Paul',
    lastName: 'Richardson',
    age: 23,
    pet: [
      {
        type: 'DOG',
        name: 'Rocco'
      },
      {
        type: 'DOG',
        name: 'Rosey'
      },
    ]
  })
  console.log(graph)

  // -----
  cleanup()
}

run()
