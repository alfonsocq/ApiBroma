const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke: String,
	punch: String,
	
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;