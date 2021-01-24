const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const firstFiveUsers = await User.query().orderBy('lastName').limit(5)
  console.log(firstFiveUsers)

  // Get the second 5 users, ordered by lastName
  const secondFiveUsers = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(secondFiveUsers)

  // -----
  cleanup()
}

run()
