const myFunc = cb => {
  cb()
}

const fun = () => {
  console.log('I am a callback function')
}

myFunc(fun)
