import { Queue } from "bullmq";
import { TargetEmail } from "../types.js";

export class CampaignsService {
  private queue: Queue;

  constructor() {
    this.queue = new Queue("email-queue", {
      connection: {
        host: process.env.REDIS_HOST || "127.0.0.1",
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