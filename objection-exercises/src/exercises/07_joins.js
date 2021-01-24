const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pet')
  console.dir(usersAndPets, { depth: null })

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pet, child]')
  console.dir(usersPetsAndChildren, { depth: null })

  // Get all users, their parents, and their grandparents
  const usersPetsParentsGrandparents = await User.query().withGraphFetched('[parent, parent.parent]')
  console.dir(usersPetsParentsGrandparents, { depth: null })

  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPetsChildrenChildrenspets = await User.query().withGraphFetched('[pet, child, child.pet]')
  console.dir(usersPetsChildrenChildrenspets, { depth: null })
  
  // -----
  cleanup()
}

run()
