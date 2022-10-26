setTimeout(() => {
  console.log('timer')
}, 0)

const newPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  resolve('promise')
  //   }, 0)
})

newPromise.then(value => {
  console.log(value)
})
