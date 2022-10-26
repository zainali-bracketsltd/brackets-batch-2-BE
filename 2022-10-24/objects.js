const person = {
  name: 'zain',
  age: 60
}

// console.log(person.name)
// console.log(person['name'])

// console.log(Object.keys(person))
// console.log(Object.entries(person))

for (const key in person) {
  // login here
  console.log({ [key]: person[key] })
}
