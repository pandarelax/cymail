import { Request, Response } from 'express';

export class HealthcheckController {
    public static async live(req: Request, res: Response): Promise<void> {
        try {
            // Perform any necessary healthcheck logic here

            res.status(200).json({ status: 'ok' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public static async ready(req: Request, res: Response): Promise<void> {
        try {
            // Perform any necessary healthcheck logic here

            res.status(200).json({ status: 'ok' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
