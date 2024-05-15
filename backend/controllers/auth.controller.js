import { errorHandler } from "../Utils/error.js";
import User from "../models/user.models.js";
import bycryptjs from 'bcryptjs'

export const signup = async (res, req, next) =>{
    const { username, email, password } = req.body;
    const hashedPassword = bycryptjs.hashSync(password, 10)
    const newUser = new User ({ username, email, password: hashedPassword })
    try {
        await newUser.save()
    res.status(201).json("User created successfully")
    } catch (error) {
        // next(errorHandler(500, "Internal server error"))
        next(error)
    }
}