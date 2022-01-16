import jwt from "jsonwebtoken";

export default (req, res) => {
    try{
        if(!req.cookies.token){
            res.json({userId:'', username:''})
        }else{
            const payload = jwt.verify(req.cookies.token, "secret123");
            if (payload){
                res.json({userId:payload.userId, username:payload.username})
            }else{
                res.json({userId:'', username:''})
            }
        }
    }catch(err){
        res.send(err.message)
    }
    
}