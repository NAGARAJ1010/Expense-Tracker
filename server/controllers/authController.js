const jwt = require('jsonwebtoken');
const { signUpValidation } = require("../middlewares/validator");
const { signInValidation } = require("../middlewares/validator");
const userModel = require("../models/userModel");
const { doHash, doHashValidation } = require("../utils/hashing");

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

exports.signIn = async(req, res, next)=>{
    const {email, password} = req.body;
    try {
        const {error, value} = signInValidation.validate({email, password});
        if(error){
            return res.status(401).json({
                success: false,
                message: error.details[0].message
            })
        }

        const existingUser = await userModel.findOne({email}).select('+password');
        if(!existingUser){
            return res.status(401).json({
                success: false,
                message: 'User does not exist'
            })
        }

        const result = await doHashValidation(password, existingUser.password);
        if(!result){
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials...'
            })
        }

        const token = jwt.sign({
            userId: existingUser._id,
            email: existingUser.email,
            verified: existingUser.verified,
        }, process.env.TOKEN_SECRET, {expiresIn: '8h'});

        res.cookie("Authorization", "Bearer" + token, {
          expires: new Date(Date.now() + 8 * 3600000),
          httpOnly: process.env.MODE_ENV === "development",
          secure: process.env.MODE_ENV === "development",
        }).json({
            success : true,
            message: 'logged in successfully',
            token
        });

        
    } catch (error) {
        console.log(error);
    }
}