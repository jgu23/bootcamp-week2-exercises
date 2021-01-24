const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const namedWillConsidine = await User.query().where('firstName', 'Will').andWhere('lastName', 'Considine')
  console.log(namedWillConsidine)

  // Do the same with object notation
  const namedWillConsidineObject = await User.query().where({ firstName: 'Will', lastName: 'Considine' })
  console.log(namedWillConsidineObject)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsBirds)

  // -----
  cleanup()
}

run()
