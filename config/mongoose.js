const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
require('dotenv').config();
const DB = 'mongodb+srv://deadpool:ironman@project.hlhbwnd.mongodb.net/nodeAuth?retryWrites=true&w=majority' || process.env.MONGO_URL;

mongoose.connect(DB, {
	useNewUrlParser: true,
  	useUnifiedTopology: true,
 	
 }).then(() => {
	console.log('connection successful');
}).catch((err) => console.log('no connection',err));

module.exports = mongoose;
