// creating token and sending cookie
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    //option for cookie
    const option = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: "none",
<<<<<<< HEAD
        secure: true
=======
        secure:true
>>>>>>> ff661539e43b5ae24c4190483377d71b57dbb3d4
    }

    res.status(statusCode).cookie('token', token, option).json({
        success: true,
        user,
        token,
      
    })
}

module.exports = sendToken
