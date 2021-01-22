const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  firstName: casual.first_name,
  lastName: casual.last_name,
  email: casual.email,
  dob: casual.date(),
  password: casual.password,
  bio: casual.description,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const users = []

for (let i = 0; i < 20; ++i) {
  users.push(casual.user)
}

module.exports = users
