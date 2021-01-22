const casual = require('casual')
const users = require('./users')

casual.define('friend', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  requesterId: user1Id,
  requestedId: user2Id,
  status: casual.integer(),
  requestedAt: casual.moment,
  acceptedAt: casual.moment,
}))

const friends = []

for (let i = 0; i < 100; ++i) {
  const user1Id = casual.random_element(users).id
  let user2Id = ''
  do {
    user2Id = casual.random_element(users).id
  } while (user2Id === user1Id);

  friends.push(casual.friend({ user1Id, user2Id }))
}

module.exports = friends
