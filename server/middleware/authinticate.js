const jwt = require('jsonwebtoken');


// middleware for athuntication

const authentication = (req,res,next) =>{

    const token = req.header('user-authentication-token')

    if(!token){
        return res.status(406).json({
            err: "authorize denine"
        })
    }
    const verified = jwt.verify(token,process.env.JWT_SECRET)

    if(!verified){
        return res.status(406).json({err:"verification fail"})
    }

    req.user_id = verified.id;
    next();
}

module.exports = authentication

