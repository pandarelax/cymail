import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import Campaign from "./campaigns.model.js";

@Table({
    tableName: "target",
    timestamps: true,
    modelName: "Target"
})
export class Target extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    declare fullName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    declare email: string;

    // many to many relationship with campaign
    @BelongsToMany((): typeof Campaign => Campaign, { through: "campaign_target" })
    declare campaigns: Campaign[];
}