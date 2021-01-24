const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      parent: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.parentId',
          to: 'users.id'
        },
      },
      child: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.childId',
          to: 'users.id'
        },
      },
    }
  }
}

module.exports = Relation