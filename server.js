const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
const cookieParser=require('cookie-parser');
//const authRoute=require("../routes/AuthRoute.js");
const userRoute=require( "./routes/UserRoute.js");
const restaurantRoute=require("./routes/RestaurantRoute.js");
const foodRoute=require("./routes/FoodRoute.js");
const menuRoute=require("./routes/MenuRoute.js");
const cartRoute=require("./routes/CartRoute.js");
const orderRoute=require("./routes/OrderRoute.js");


dotenv.config()

const app=express();


const connect =async()=>{
    try{
        await mongoose.connect(process.env.mongo);
        
        //console.log('Mongoose version:', mongoose.version);
        console.log("Connected to mongodb");
    }
    catch(err)
    {
        throw err;
    }
}

/*mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})*/


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

//app.use("/auth",authRoute)
app.use("/users",userRoute);
app.use("/restaurants",restaurantRoute);
app.use("/foods",foodRoute);
app.use("/menus",menuRoute);
app.use("/cart",cartRoute);
app.use("/order",orderRoute);


app.listen(8800,()=>{
    connect();
    //console.log(__dirname);
    console.log("Connected to the server");
})
 