import passport from "passport"
import passportJwt from 'passport-jwt'
import User from "../models/User.js"

passport.use (
    new passportJwt.Strategy({
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    },
    async (jwt_payload,done)=> {
        try {
            let user =await user.findOne({_id:jwt_payload.ed})
            if (user){
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (error){
            console.log(error)
            return done(error,false)
        }
      
    }
    )
    )