const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username: 
    {
        type: String, 
        unique:true,
        //required: true
    },
    email: 
    {
        type :String ,
        unique :true ,
        required :true
    },
    password:
    {
        type :String , 
        required : true
    },
    firstname:
    {
        type:String,
        required:true
    },
    lastname: 
    {
        type:String,
        required:true
    },
    addressLine1:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    state:
    {
        type:String,
        required:true
    },
    phno:
    {
        type:String,
    },
    role:
    {
        type: String,
        trim: true,
        enum: ["user", "admin"],
        default: "user"
    },
    cart:
    {
        type:Schema.Types.ObjectId,
        ref:"Cart"
    },
    order:
    {
        type:Schema.Types.ObjectId,
        ref:"Order"
    },
    createdAt:
    {
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('users',UserSchema);
