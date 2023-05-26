import Company from '../../models/Company.js'
import createHttpError from 'http-errors'

let adminCompanies = async(req,res,next)=>{
    try{
        let active = await Company.find({active:true})
        let inactive = await Company.find({active:false})
        res.status(200).json({
            active:active,
            inactive:inactive
        })
    }catch(error){
        console.log(error);
        next(error)
        }
    }

export default adminCompanies