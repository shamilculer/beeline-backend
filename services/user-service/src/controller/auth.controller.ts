import { Request, Response, NextFunction } from "express"
import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import userRegisterSchema from "../constants/userRegisterSchema";
import { CONFLICT, CREATED } from "../constants/http"
import { JWT_SECRET_KEY } from "../constants/env";

const age = Number(process.env.TOKEN_EXPIRY || 1000 * 60 * 60 * 24)

export const registerUser  = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, username, password, userAgent } = userRegisterSchema.parse(req.body)

        const userAlreadyExists = await User.exists({email})
        if(userAlreadyExists){
            res.status(CONFLICT).json({ message: "User with the same email adress already exist." })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })

        const accessToken = jwt.sign(
            newUser._id,
            JWT_SECRET_KEY,
            {
                
            }
        )

        res.status(CREATED).json({
            message: "User  registered successfully",
        });

    } catch(error) {
        next(error)
    }
}