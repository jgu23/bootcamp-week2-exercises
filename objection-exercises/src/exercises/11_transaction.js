const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/User')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const transac = await User.transaction(async trx => {
      const newUser = await User.query(trx).insert({
        email: 'jeffreygu@college.harvard.edu',
        firstName: 'Jeffu',
        lastName: 'Guu',
        age: 22
      }).returning('*')
      const newPet = await newUser.$relatedQuery('pet', trx).insrt({
        type: 'DOG',
        name: 'oofy'
      })
      const petCount = await Pet.query(trx).resultSize()
      if (petCount > 15) {
        const byeByeBirdie = await Pet.query(trx).delete().where('type', 'BIRD').returning('*')
        console.log(byeByeBirdie)
      }
    })
  } catch (err) {
    throw new Error("This is an error")
  }

  // -----
  cleanup()
}

run()

