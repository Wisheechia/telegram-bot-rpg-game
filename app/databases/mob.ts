import { Schema, model, FilterQuery } from "mongoose";
 
import type { MonsterInterface } from "../types/monster.interfaces";
 
const schema = new Schema<MonsterInterface>({
    id: { type: String, default: "0"},
    monster_type: {type: String, default: "slime"},
    name: { type: String, default: "" },
    health: { type: Number, default: 0 },
    attack_power: { type: Number, default: 1 },
 });
 
const query = model<MonsterInterface>("Monster", schema, "monster");
 
const add = async (monster: MonsterInterface): Promise<void> => {
    try {
        const doc = new query(monster);
        await doc.save();
    } catch (error: unknown) {
        console.log(JSON.stringify(error || ""), "monster.ts:add()");
    }
};
 
const remove = async (search: Record<string, number | string | boolean>): Promise<void> => {
    try {
        await query.findOneAndDelete(search);
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "monster.ts:remove()");
    }
 };

const update = async (search: Record<string, number | string | boolean>, user: MonsterInterface): Promise<void> => {
    try {
        await query.findOneAndUpdate(search, user);
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "monster.ts:update()");
    }
};

const get = async (search: Record<string, number | string | boolean>): Promise<MonsterInterface> => {
    console.log(search, "SEARCH")
    try {
        const player = await query.findOne(search);

        return await player || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "monster.ts:get() catch ");
    }

    return new query();
};
 

const getMultiple = async (search: Record<string, number | string | boolean>): Promise<MonsterInterface[]> => {
    try {
        const master = await query.find(search, function (error: string) {
            if (error) {
                console.error(JSON.stringify(error || ""), "monster.ts:getMultiple()");
            }
        });
        return (await master) || [];
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "monster.ts:getMultiple()");
    }

    return [];
};
 
export { get, update, remove, add, getMultiple };
export default { get, update, remove, add, getMultiple };
 