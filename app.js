const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser');
const UserRoutes = require('./routes/api/user')
// app.use(express.static(path.join(__dirname, "public/")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// app.get('/', (req, res) => res.send('Hello World!'))
app.use("/", UserRoutes);
app.listen(port, () => console.log(`Example app listening on port port!`))
