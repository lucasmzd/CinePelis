require("dotenv").config()
const app = require ("./src/app")
const dbCon = require ("./src/config/dbCon")

const { PORT } = process.env

dbCon()
.then(()=> app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`)))
.catch((err)=> console.log("Falló la conexion" + err.message))

