const casual = require('casual')
const users = require('./users')

casual.define('post', ({ userId }) => ({
  id: casual.uuid,
  posterId: userId,
  likes: casual.integer(),
  post: casual.description,
  postedAt: casual.moment,
}))

const posts = []

for (let i = 0; i < 150; ++i) {
  const userId = casual.random_element(users).id
  posts.push(casual.post({ userId }))
}

module.exports = posts