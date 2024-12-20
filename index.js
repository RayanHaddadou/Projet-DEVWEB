const express = require('express')
const app = express()
const port = 3000
const usersRouter = require("./routes/users.js")


//middleware
app.use(express.json())
//users endpoint
app.use("/api/", usersRouter)

app.get("/", (req, res) => {
	res.json({
		msg: "Welcome to my users API !"
	})
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})






