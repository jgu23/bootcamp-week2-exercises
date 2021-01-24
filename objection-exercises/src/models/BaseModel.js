const { Model, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  /* Had to comment this out for inserting, was looking for a first_name column in the database
    static get columnNameMappers() {
      return snakeCaseMappers()
    }
  */
}

module.exports = BaseModel
