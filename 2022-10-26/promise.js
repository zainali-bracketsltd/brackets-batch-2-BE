const myNewPromise = new Promise((resolve, reject) => {
  //   if (1 > 3) {
  //     resolve('kuch bhi')
  //   } else {
  //     reject('not fulfilled')
  //   }

  setTimeout(() => {
    resolve('fulfilled')
  }, 3000)
})

myNewPromise
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
