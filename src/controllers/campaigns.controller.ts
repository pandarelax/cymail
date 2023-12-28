import { Request, Response } from 'express';
// import { Campaign } from '../models/Campaign';

export class CampaignsController {
    // GET /campaigns
    public async get(req: Request, res: Response) {
        res.send('Hello Campaigns!');
    }

    // GET /campaigns/:id
    public async getById(req: Request, res: Response) {
    }

    // POST /campaigns
    public async create(req: Request, res: Response) {
    }

    // PUT /campaigns/:id
    public async update(req: Request, res: Response) {

    }

    // DELETE /campaigns/:id
    public async delete(req: Request, res: Response) {
    }

    // POST /campaigns/launch
    public async launch(req: Request, res: Response) {
    }

    // POST /campaigns/schedule
    public async schedule(req: Request, res: Response) {
    }
}
