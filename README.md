# Shopping-app-backend
To use this as a backend 
Add a config.env file in config folder and add the following variablle in that file:->

PORT,
MONGO_URI,
JWT_SECRET, 
JWT_EXPIRE, 
COOKIE_EXPIRE, 
SMPT_SERVICE, 
SMPT_MAIL,
SMPT_PASSWORD,  
SMPT_HOST,
SMPT_PORT, 
CLOUDINARY_NAME,  
CLOUDINARY_API_KEY , 
CLOUDINARY_API_SECRET  


## Database Schema
1 : User

```
user = {
  name: String,
  email: String,
  password: String,
  avatar:{
    public_id :String,
    url : String
  },
  role:String,
  createdAt: date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  getJWTToken: ()=> return jwtToken,
  comparePassword: ()=> return bool,
  getResetPasswordToken : () => return token
  
}
```
2 : Product 

```
Product = {
  name : String,
  description : String,
  price : Number,
  ratings : Number,
  images: [
    {
      public_id: String,
      url : String
    }
  ],
  category : String,
  Stock : Number,
  numofReviews : Number,
  reviews : [
    {
      user : mongoose.Schema.ObjectId(ref = User),
      name : String,
      rating : Number,
      comment : String
    }
  ],
 user : mongoose.Schema.ObjectId(ref = User),
 createdAt : date
}
```
3 : Order

```
Order = {
  shippingInfo : {
    address : String,
    city : String,
    state : String,
    country : String,
    pincode : Number,
    phoneNo : Number
  },
  orderItems:[{
    name : String,
    price : Number,
    quantity : Number,
    image : String,
    Product : mongoose.Schema.ObjectId(ref = Product)
  }],
 user : mongoose.Schema.ObjectId(ref = User),
 paymentInfo : {
   id : String,
   status : String
 },
 paidAt : date,
 itemsPrice : Number,
 taxprice : Number,
 shippingPrice : Number,
 totalPrice : Number,
 orderStatus : String,
 deliveredAt : date,
 createdAt : date
 
}
```![diagram-export-12-30-2023-4_06_48-PM](https://github.com/abhimanyu12321/Shopping-app-backend/assets/122272179/f95d3fd1-1fa1-47c1-918f-12000f7d1959)



