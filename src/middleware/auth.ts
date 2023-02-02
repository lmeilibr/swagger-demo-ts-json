import {Response, NextFunction, Request} from "express";

export async function validateAuth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).send()
    }

    const [, user] = token.split(" ")

    if (user === "zeroCool") {
        return next()
    }

    return res.status(401).send()
}