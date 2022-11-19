import { Bot } from "grammy";
import { configs } from "../configs/config";
import { connectDB } from "../databases/connection"
import commands from "../routes/commands"

const bot = new Bot(configs.telegram.token);

(async () => {
    await connectDB()

    await commands.start();

    await commands.launch();
})();