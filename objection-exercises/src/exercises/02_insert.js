const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table

  const jeffrey = await User.query().insert({
    email: 'jgu3661@gmail.com',
    firstName: 'Jeffrey',
    lastName: 'Gu',
    age: 19,
  })
  console.log(jeffrey)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const froog = await Pet.query().insert({
    ownerId: 'cd09db1b-0176-4986-8ac8-e52ef82b557c',
    type: 'DOG',
    name: 'froog',
  })
  console.log(froog)

  // -----
  cleanup()
}

run()
