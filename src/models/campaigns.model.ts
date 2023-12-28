import { AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Target from "./targets.model.js";

@Table({
    tableName: "campaign",
    timestamps: true,
    modelName: "Campaign"
})
export class Campaign extends Model {
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
    declare name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    declare description: string;

    // Many to many relationship with target
    @BelongsToMany((): typeof Target => Target, { through: "campaign_target" })
    declare targets: Target[];
}