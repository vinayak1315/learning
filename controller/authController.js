const ErrorHandler = require('../utils/errorHandler');

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, age, gender } = req.body;
        const data = {
            name,
            email,
            password,
            age,
            gender
        }
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (err) {
        return next(new ErrorHandler(err.message, 500));
    }
}

exports.signin = async (req, res, next) => {
    try {
        const { email, password, cpassword } = req.body
        let message;
        const dbpassword = 1234
        if (password == cpassword) {
            if (password == dbpassword) {
                message = "Login Successfully"
            } else {
                return next(new ErrorHandler("Please enter valid email and password", 403));
            }
        } else {
            return next(new ErrorHandler("Password not match with confirm password", 403));
        }
        res.status(200).json({
            success: true,
            message: message
        })
    } catch (err) {
        return next(new ErrorHandler(err.message, 500));
    }
}