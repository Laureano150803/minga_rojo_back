import mongoose from "mongoose";
 let schema = mongoose.Schema({
    name:{type:String, required:true},
    logo:{type:String, required:true},
    webside:{tpe:String,required:true},
    description:{type:String, required:false},
    active:{type:Boolean, required:true},
    user_id:{
        type:mongoose.Types.ObjectId, 
        ref:'users',
        required:true
 }},
 {
    timestamps:true
 })

 let collection = 'companies'

 let Company = mongoose.model(schema, collection)

 export default Company