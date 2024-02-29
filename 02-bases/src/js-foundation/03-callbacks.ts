interface User {
  id: number
  name: string
  age: number
}

const users: User[] = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Jane', age: 25 }
]


export function getUserById(id: number, callback: (err?: string, user?: User) => void) {
  const user = users.find(function (user) {
    return user.id === id
  })

  if (!user) return callback(`User not found with id ${id}`)

  callback(undefined, user)
}

// module.exports = {
//   getUserById
// }
