import {Schema,model, Types} from "mongoose";

let schema = new Schema({
    manga_id:{
        type:Types.ObjectId,
        ref:'mangas',
        required:false
    },
    title:{type:String,required:true},
    cover_photo:{type:String,required:false},
    pages:[{type:String,required:true}],
    order:{type:Number,required:true}
},{
    timestamps:true
})
let collection = 'chapters'

let Chapter = model(collection, schema)
export default Chapter