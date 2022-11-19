import { Bot } from "grammy";
import { configs } from "../configs/config";
import mongoose from "mongoose"


const connectDB = async (): Promise<void> => {
    try {
        mongoose.connect(configs.database.mongoURL, () => {
            console.log("Connected to mongo")
        });
    } catch (error: unknown){
        console.error(JSON.stringify(error || ""), "connections.ts:connectDB()")
    }
}

export { connectDB }
export default { connectDB };
