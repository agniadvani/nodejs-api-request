const express = require("express")
const PORT = 3000
const app = express()
const friendsRouter = require('./routers/friends.router')

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} ${req.url}`);
    next()
    const delta = Date.now() - start
    console.log(`Total time taken for response: ${delta}ms.`)

})
app.use(express.json())
app.use("/friends", friendsRouter)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))