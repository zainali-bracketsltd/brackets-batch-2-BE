const people = [
  { name: 'Aslam', age: 50 },
  { name: 'Zakia', age: 70 },
  { name: 'Harry', age: 16 },
  { name: 'Harry', age: 14 }
]

const numbers = [4, 6, 4, 5]

const enhanced_numbers = numbers.map(n => {
  return n * 10
})

const filtered_numbers = numbers.filter(n => {
  return n > 4
})

const aged_people = people.filter(person => {
  return person.age >= 50
})

const required_person = people.find(person => {
  return person.name === 'Zakia'
})

const some = people.some(person => {
  return person.age >= 70
})

const every = people.every(person => {
  return person.age > 15
})

people.forEach(function (person) {
  console.log(person)
})

// console.log({ every })
