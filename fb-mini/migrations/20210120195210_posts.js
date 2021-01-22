
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'))
    
    table
        .uuid('posterId')
        .notNullable()
    
    table.foreign('posterId').references('users.id')
  
    table
        .integer('likes')
        .defaultTo(0)
        .notNullable()
    
    table
      .text('post')
      .notNullable()
    
    table
      .date('postedAt')
      .notNullable()
  })

exports.down = async knex => knex.schema.dropTableIfExists('posts')