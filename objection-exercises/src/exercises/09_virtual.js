const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const firstPerson = await User.query().first()
  console.log(firstPerson.fullName)
  console.log(firstPerson.isAdult)
  
  // -----
  cleanup()
}

run()
