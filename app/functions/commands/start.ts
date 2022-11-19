import bot from "../../core/bot";
import db from "../../routes/database";
 
import type { PlayerInterface } from "../../types/player.interfaces";
 

 const start = async (): Promise<void> => {
     bot.command("start", async (ctx) => {
        const player: PlayerInterface = await db.player.get({
            id: "51104298",
        });
        
        console.log("PLAYER: ", player)
        
        //  if (users.id.toString() !== "0") {
        //      await db.users.update({ id: users.id }, telegram.api.message.getFullUser(ctx));
        //  } else {
        //      await db.users.add(telegram.api.message.getFullUser(ctx));
        //  }
 
         if (ctx.msg.chat.id < 0) {
             // is group chat
             await ctx.reply( "ID" );
         } else {
            await ctx.reply("Start command private")

         }
     });

     bot.command("prova", async (ctx) => {
            await ctx.reply("Fiet")
     });
 };
 
 export { start };
 export default start;
 