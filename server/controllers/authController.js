const { signUpValidation } = require("../middlewares/validator");
const userModel = require("../models/userModel");
const { doHash } = require("../utils/hashing");

exports.signUp = async(req, res, next)=>{
    const {fullName, email, password, confirmPassword} = req.body;
    try {
        const{error, value} = signUpValidation.validate({email,password});
        if(error){
            return res.status(401).json({
                success: false,
                message: error.details[0].message
            })
        }

        const isUserExist = await userModel.findOne({email});
        if(isUserExist){
            return res.status(401).json({
                success: false,
                message: 'User already exist'
            })
        }

        const hashedPassword = await doHash(password, 12);
        const newUser = new userModel({
            fullName,
            email,
            password: hashedPassword
        });
        const result = await newUser.save();
        result.password = undefined;
        res.status(201).json({
            success: true,
            message: 'Your account has been created successfully...',
            result
        })

    } catch (err) {
        console.log(err);
    }
}