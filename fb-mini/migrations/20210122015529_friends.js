
exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  
  table
      .uuid('requesterId')
      .notNullable()
  
  table
      .uuid('requestedId')
      .notNullable()
  
  table.foreign('requesterId').references('users.id')
  table.foreign('requestedId').references('users.id')

  table  
      .integer('status')
      .defaultTo(0)
      .notNullable()
  
  table
      .datetime('requestedAt')
      .notNullable()
  
  table
      .datetime('acceptedAt')
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')