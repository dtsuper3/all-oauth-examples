import { NextFunction, Request, Response } from "express";
import { getGoogleToken } from "../utils/auth";

async function authController(req: Request, res: Response, next: NextFunction) {
    try {
        const token = await getGoogleToken(req.body.code);
        return res.json({ token });
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export {
    authController
}