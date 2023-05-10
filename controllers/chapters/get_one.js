// import Chapter from "../../models/Chapter.js";

// let read = async(req,res,next)=>{
//     try{
//         let all = await Chapter.find({
//             title: {"$regex": 'ga', $options: 'i'}
//         }, 'pages title -_id' )
//         return res.status(200).json({
//             succes:true,
//             response: all
//         })
        
//     }catch(error){
//         next(error)
//     }
// }

// export default read