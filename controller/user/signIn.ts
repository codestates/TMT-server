import { Request, Response } from 'express';

export const signIn = async (req : Request, res : Response) : Promise<void> => {
    try {
        res.end();
    }
    catch (err) {
        res.end();
    }
}