const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 100)
})

myPromise
  .then(value => `this is my ${value}`)
  .then(value => {
    console.log(value)
  })
  .catch(err => {
    console.error(err)
  })

setTimeout(() => {
  console.log('testing timer')
}, 10)

console.log('base test')
