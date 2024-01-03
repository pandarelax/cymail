import { Request, Response } from 'express';
import { Campaign } from '../models/campaigns.model.js';
import sequelize from '../db/connection.js';
import { CampaignsService } from '../services/campaigns.service.js';
import { TargetEmail } from "../types.js";
import { Target } from '../models/targets.model.js';
import { Transaction } from 'sequelize';
// import { Campaign } from '../models/Campaign';

export class CampaignsController {

    constructor(
        private campaignsService: CampaignsService
    ) {}
    
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
            const result = await sequelize.transaction(async (t: Transaction) => {
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

            const result = await sequelize.transaction(async (t: Transaction) => {
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

        await sequelize.transaction(async (t: Transaction) => {
          await campaignToDelete.destroy({ transaction: t });
        });

        return res.status(204).json({ message: 'Campaign deleted successfully'});
        
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    /**
     * Launches the simulation of a campaign and adds the target emails to the queue
     * @param req Request
     * @param res Response
     * @returns Promise<Response>
     */
    public async launch(req: Request, res: Response) {
        try {
            const campaign = await Campaign.findByPk(req.params.id);

            if (!campaign) {
                return res.status(404).json({ error: 'Campaign not found' });
            }

            const targets = await campaign.$get('targets');

            if (!targets) {
                return res.status(404).json({ error: 'Targets not found' });
            }

            const targetMails: TargetEmail[] = targets.map(
              (target: Target) => ({
                from: "efehanturhan@gmail.com",
                to: target.email,
                subject: `Simulation Test: ${target.fullName}`,
              })
            );

            // Add target emails to queue
            await this.campaignsService.addTargetEmailsToQueue(targetMails);

            return res.status(200).json({ message: 'Campaign launched successfully' });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    // POST /campaigns/schedule
    public async schedule(req: Request, res: Response) {
    }
}
