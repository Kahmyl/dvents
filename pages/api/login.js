import cookie from "cookie";

export default (req, res) => {
    res.setHeader(
        "set-cookie",
        cookie.serialize("token", req.body.token,{
            httpOnly: true,
            secure:process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    ).json({userId: req.body.userId, username: req.body.username, email: req.body.email});

    res.statusCode = 200;
    res.json({success: true});
}