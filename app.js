const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");




app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json())
app.use(fileUpload());


//Routes imports
app.use("*", cors({
    origin: true,
    credentials: true,

}))
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoutes")
const payment = require("./routes/paymentRoute");
app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", payment);


//Middleware for error
app.use(errorMiddleware)


module.exports = app;