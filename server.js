const app = require("./app")
const connectDatabase = require('./config/database')
require("dotenv").config({ path: './config/config.env' });
const cloudinary = require("cloudinary")

//Handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`error : ${err.message}`)
    console.log("shutting down server due to uncaught exception")
    process.exit(1);
})


// DB connection
connectDatabase();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});

//unhandeled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`error : ${err.message}`)
    console.log("shutting down server due to unhandeled promise Rejection!!!!")

    server.close(() => {
        process.exit(1)
    })
})




