import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST } from "../constants/http";
import z from "zod";

const handleZodError = (res: Response, error: z.ZodError) => {
        return res.status(BAD_REQUEST).json({
            message: error.message,
        });
};


const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof z.ZodError) {
        handleZodError(res, error)
    }else{
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
}

export default errorHandler