const jwt = require('jsonwebtoken')

function verify(req,res,next){
     const authHeader = req.headers.authorization;
     if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,(err,user) => {
            if(err) return res.status(403).json("Token error");
            req.user=user;
            next();
        })
     } else {
        return res.status(401).json("Your not authenticated")
     }
}
module.exports=verify;