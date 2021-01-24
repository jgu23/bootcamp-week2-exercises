const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const totalNumberUsers = await User.query().resultSize()
  console.log(totalNumberUsers)

  // Get the average age of users
  const avgAgeUsers = await User.query().avg('age as avgAge')
  console.log(avgAgeUsers)

  // Get the total number of dogs
  const totalNumberDogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(totalNumberDogs)

  // -----
  cleanup()
}

run()
