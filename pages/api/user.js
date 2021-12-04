import jwt from "jsonwebtoken";

export default (req, res) => {
    const payload = jwt.verify(req.cookies.token, "secret123");

    if (payload){
        res.json({userId:payload.userId, username:payload.username})
    }
}