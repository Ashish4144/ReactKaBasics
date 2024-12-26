const mongoose = require('mongoose');

const dbConnect = async () => 
{
    await mongoose.connect('Your Mongo db connection')

};

module.exports = dbConnect;
