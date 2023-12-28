import { Request, Response } from 'express';
import { Campaign } from '../models/campaigns.model.js';
import sequelize from '../db/connection.js';
// import { Campaign } from '../models/Campaign';

export class CampaignsController {
    // GET /campaigns
    public async get(req: Request, res: Response) {
        try {
            const campaigns = await Campaign.findAll();

            if (!campaigns) {
                return res.status(404).json({ error: 'Campaigns not found' });
            }

            res.status(200).json(campaigns);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
        
    }

    // GET /campaigns/:id
    public async getById(req: Request, res: Response) {
        try {
            const campaign = await Campaign.findByPk(req.params.id);

            if (!campaign) {
              return res.status(404).json({ error: "Campaign not found" });
            }

            res.status(200).json(campaign);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    // POST /campaigns
    public async create(req: Request, res: Response) {
        try {
            const result = await sequelize.transaction(async (t) => {
                const campaign = await Campaign.create(req.body, { transaction: t });

                return campaign;
            });

            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // PUT /campaigns/:id
    public async update(req: Request, res: Response) {
        try {
            const campaignToUpdate = await Campaign.findByPk(req.params.id);

            if (!campaignToUpdate) {
                return res.status(404).json({ error: 'Campaign not found' });
            }

            const result = await sequelize.transaction(async (t) => {
                const campaign = await campaignToUpdate.update(req.body, { transaction: t });

                return campaign;
            });

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // DELETE /campaigns/:id
    public async delete(req: Request, res: Response) {
       try {
         const campaignToDelete = await Campaign.findByPk(req.params.id);

        if (!campaignToDelete) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        await sequelize.transaction(async (t) => {
            await campaignToDelete.destroy({ transaction: t });
        });

        return res.status(204).json({ message: 'Campaign deleted successfully'});
        
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    // POST /campaigns/launch
    public async launch(req: Request, res: Response) {
    }

    // POST /campaigns/schedule
    public async schedule(req: Request, res: Response) {
    }
}
