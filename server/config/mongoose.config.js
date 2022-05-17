const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/joker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexion con la base datos establecida"))
	.catch(err => console.log("algo salio mal al conectar la base de datos", err));