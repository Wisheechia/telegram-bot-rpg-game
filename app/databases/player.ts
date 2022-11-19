import { Schema, model, FilterQuery } from "mongoose";
 
import type { PlayerInterface } from "../types/player.interfaces";
 
const schema = new Schema<PlayerInterface>({
    id: { type: String, default: "0"},
    is_bot: { type: Boolean, default: false },
    first_name: { type: String, default: "" },
    username: { type: String, default: "" },
    score: { type: Number, default: 0 },
    attack_power: { type: Number, default: 1 },
    group_id: { type: Number, default: 0 },
 });
 
const query = model<PlayerInterface>("Player", schema, "player");
 
const add = async (player: PlayerInterface): Promise<void> => {
    try {
        const doc = new query(player);
        await doc.save();
    } catch (error: unknown) {
        console.log(JSON.stringify(error || ""), "master.ts:add()");
    }
};
 
const remove = async (search: Record<string, number | string | boolean>): Promise<void> => {
    try {
        await query.findOneAndDelete(search);
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "master.ts:remove()");
    }
 };

const update = async (search: Record<string, number | string | boolean>, user: PlayerInterface): Promise<void> => {
    try {
        await query.findOneAndUpdate(search, user);
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "master.ts:update()");
    }
};

const get = async (search: Record<string, number | string | boolean>): Promise<PlayerInterface> => {
    console.log(search, "SEARCH")
    try {
        const player = await query.findOne(search);

        return await player || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "master.ts:get() catch ");
    }

    return new query();
};
 

const getMultiple = async (search: Record<string, number | string | boolean>): Promise<PlayerInterface[]> => {
    try {
        const master = await query.find(search, function (error: string) {
            if (error) {
                console.error(JSON.stringify(error || ""), "master.ts:getMultiple()");
            }
        });
        return (await master) || [];
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "master.ts:getMultiple()");
    }

    return [];
};
 
export { get, update, remove, add, getMultiple };
export default { get, update, remove, add, getMultiple };
 