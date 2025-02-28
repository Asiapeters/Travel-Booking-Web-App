// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');
const User = require('./user'); 

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    // Ensure the users collection exists
    await User.init(); // Ensures indexes are created

}

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
})