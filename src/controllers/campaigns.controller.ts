import { Request, Response } from 'express';
// import { Campaign } from '../models/Campaign';

export class CampaignsController {
    // GET /campaigns
    public static async get(req: Request, res: Response) {
        res.send('Hello Campaigns!');
    }

    // GET /campaigns/:id
    public static async getById(req: Request, res: Response) {
    }

    // POST /campaigns
    public static async create(req: Request, res: Response) {
    }

    // PUT /campaigns/:id
    public static async update(req: Request, res: Response) {

    }

    // DELETE /campaigns/:id
    public static async delete(req: Request, res: Response) {
    }
}
