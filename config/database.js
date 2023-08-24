const mongoose = require('mongoose');


async function connectDatabase() {

    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb database successfully')

}

module.exports = connectDatabase;