import { Bot } from "grammy";
import { configs } from "../configs/config";
 
const bot = new Bot(configs.telegram.token);
 
export { bot };
export default bot;
 