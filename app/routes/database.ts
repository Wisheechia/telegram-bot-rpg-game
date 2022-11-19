
 import connection from "../databases/connection";
 import player from "../databases/player";
 
 const db = {
     connection: connection,
     player: player
 };
 
 export { db };
 export default db;
 