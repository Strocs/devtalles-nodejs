const users = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Jane', age: 25 }
]

function getUserById (id, callback) {
  const user = users.find(function (user) {
    return user.id === id
  })

  if (!user) return callback(`User not found with id ${id}`, id)

  callback(null, user)
}

module.exports = {
  getUserById
}
