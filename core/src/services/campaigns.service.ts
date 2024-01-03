import { Queue } from "bullmq";
import { TargetEmail } from "../types.js";

export class CampaignsService {

  constructor(
    private queue: Queue
  ) {
    this.queue = new Queue("email-queue", {
      connection: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT || "6379"),
      },
    });
  }

  public async addTargetEmailsToQueue(targetMails: TargetEmail[]) {
    try {
      await this.queue.addBulk(
        targetMails.map((email) => ({
          name: "email-queue",
          data: email,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  }
}