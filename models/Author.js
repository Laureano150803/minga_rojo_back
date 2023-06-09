import {Schema,model, Types} from "mongoose";

let schema = new Schema({
    name:{type:String , required:true},
    last_name:{type:String, required:false},
    city:{type:String, required:true},
    country:{type:String, required:true},
    date:{type:Date},
    photo:{type:String, required:true},
    active:{type:Boolean, required:true},
    user_id:{type:Types.ObjectId, //Tipo de dato de moongose para referanciar
         ref:'users', // tabla a la que quiero referenciar
         requiered:true 
        }
},
{
    timestamps:true
})

let collection = 'authors'

let Author = model(collection, schema)

export default Author