const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const jeffrey = await User.query().findById('cd09db1b-0176-4986-8ac8-e52ef82b557c')

  // Use that instance to create a new pet related that user
  const froogy = await jeffrey.$relatedQuery('pet').insert({ 
    type: 'BIRD',
    name: 'froogy',
  })
  console.log(froogy)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const jeffreysPetsAndChildren = await jeffrey.$fetchGraph('[pet, child]')
  console.log(jeffreysPetsAndChildren)

  // -----
  cleanup()
}

run()
