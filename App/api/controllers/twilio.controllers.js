const smsStatusCallback = (req, res) => {
  res.status(200).send()

  try {
    console.log('*** sms callback ***', req.body)
  } catch (error) {
    console.log('==>> error in smsStatusCallback', error)
  }
}

module.exports = { smsStatusCallback }
