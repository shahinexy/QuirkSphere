import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import CatchAsync from "../utils/catchAsync";


const ValidateRequest = (schema: AnyZodObject)=>{
    return CatchAsync(async (req: Request, res: Response, next: NextFunction) =>{
        await schema.parseAsync({body: req.body});
        next()
    })
}

export default ValidateRequest;