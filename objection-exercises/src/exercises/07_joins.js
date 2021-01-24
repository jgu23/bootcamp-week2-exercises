const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pet')
  console.log(usersAndPets)

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pet, child]')
  console.log(usersPetsAndChildren)

  // Get all users, their parents, and their grandparents

  // Get all users, their pets, their chilren, and their childrens' pets

  // -----
  cleanup()
}

run()
