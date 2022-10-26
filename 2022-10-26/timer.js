setTimeout(function () {
  console.log('testing')
}, 1000)

const interval = setInterval(() => {
  console.log('interval test')
}, 1000)

clearInterval(interval)
