const express = require('express')
const app = express()
const port = 3000

const user = {
        "name": "John Doe",
        "email": "johndoe@example.com"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req,res)=> {
    res.send("<h1>Please fill in the below detail to login further</h1>")
})

app.get("/userData", (req,res)=> {
    res.json(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})