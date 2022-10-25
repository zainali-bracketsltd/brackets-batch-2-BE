// let name = 'zain'
// let age = 60

// let _2ndname = name

// _2ndname = 'test'

// console.log({ name, _2ndname })

// let person = {
//   name: 'Zain',
//   age: 60
// }

// let _2ndPerson = { ...person }

// _2ndPerson.name = 'test'

// console.log({ person, _2ndPerson })

const people = [
  { name: 'Aslam', age: 50 },
  { name: 'Zakia', age: 70 },
  { name: 'Harry', age: 16 },
  { name: 'Harry', age: 14 }
]

const _2ndPeople = [...people]

_2ndPeople[0].name = 'Akram'

console.log(_2ndPeople[0], people[0])
