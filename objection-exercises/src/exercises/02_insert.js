const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table

  const jeffrey = await User.query().insert({
    id: 'b0c3eb70-4edf-4f1d-93e4-adc7e5a293b4',
    email: 'jgu3661@gmail.com',
    firstName: 'Jeffrey',
    lastName: 'Gu',
    age: 19,
  }).returning('*')
  console.log(jeffrey)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const froog = await Pet.query().insert({
    ownerId: 'b0c3eb70-4edf-4f1d-93e4-adc7e5a293b4',
    type: 'DOG',
    name: 'froog',
  }).returning('*')
  console.log(froog)

  // -----
  cleanup()
}

run()
