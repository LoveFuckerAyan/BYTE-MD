I
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://AyanDaddy:3167441892ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923167441892@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923167441892";
global.sudo = process.env.SUDO || "923167441892";
global.owner = process.env.OWNER_NUMBER || "923167441892";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Fua2pjR1VrNnVMdFkyNG5jS09ndVIreWpJdXhlQ3ZwZ0RYVUhIK3RFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTZYTVB3dmVxSHgyN0NFRXJqTHZNN0NFZnhlOENqS2h2ZEdUSG9RT08zND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSFRCZE1YQ3JFUUllZ2ZYbHd4UWpyVVdOVThSMnpNTlNsSkxGMENOQW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMzJMbmloenVJaXpmTUkxem1wRG5pK0I5ZU9kaG0zcE9GVHI4a21RM1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQZ3BQdElJaTM1Q2VIL0NjWS95ODRQbGVmNTV0RWJkQjJFSWhTWmRQRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlycWpmV0FmdEwxSFFaZ29KT2ZpdXByc3BsaFN3U1IwZkRRM3VSNzlHVTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJ4eTZkaGxyc055a042WEVhbGFsS25SRCt3SzZMOGJJUEQvZE90NWRuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianFaSmZBdVMyMTVrVjdCdTRGRm1Id1NFQUNVUkdFNWRldXRPS0dtT0h5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhOZUFMZStJNUNNTWpXZk11a0hCZkpJbjFsUkZBMmFPekl0a1ltUWJ3R1Fqa2Q3eE5VWWpIaUpCc0xwaTI4Ylg5bjI1bFBaWlpIZFRSb0ZrSm1SbURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IjBMZTJ0R2xFKzdXOUQ2akdkTGk5MTFTckJCdXVNV0tMc2dRYkludkZDNzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhfUHZtLVBtVFNxSXRabnJPWDJSSmciLCJwaG9uZUlkIjoiMjdlMzVlMmItNWU4OS00ZTZjLTgxYjUtMzVmMjI3NjMwODQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBqM0lTMXgrZ2c3RDB3RkY3WlltZEQ5YzN0dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3U3JFWTdXVVhNQmJqWEdRN0t5MWZTYUdFcWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1czODU3UVkiLCJtZSI6eyJpZCI6IjkyMzA2NDg5Njk0Mzo3N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLiiIZMb1ZlIEZ1Y2tlciDiiIZ5YWFu4oiGXG5cbkFcblxua1xuXG5VXG5cbm1cblxuQVxuXG7iiIZFdmlMIFNvdWziiIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08zem1hWURFSmlYc2JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdPYmQ0ZUZUTHowZVBzKzJRdlhsd0g2c1hKN0l2MEJ6R3lTSGRRNjY2eXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNPK0hUbDQ1Z09NbGhlSEU5dFNmVmt1MUJpU0hGQjZKVVZLUHk0bTRPYmllNENlRVFNcjZLNTdYOU1rN2tCd0VQUTQxR3FwTVlUdXFOT3dIZzMrTUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2Y0ZUQWovV1dmT2RBTEJFRi9ZQXpsYzVlMkxzZ1cxdDFnNFZFNWszYTV0VURicS8wdzlpUnBwR1ZHQWtvSmErOHQ1S3BRMitFYTMyc2pDK01Wei9CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2NDg5Njk0Mzo3N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlem0zZUhoVXk4OUhqN1B0a0wxNWNCK3JGeWV5TDlBY3hza2gzVU91dXNzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTY3NTg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJhWSJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Ayaan Hacker*",
  author: process.env.PACK_AUTHER || "LoveFucker",
  packname: process.env.PACK_NAME || "🏳️‍🌈",
  botname: process.env.BOT_NAME || "Akuma-MD",
  ownername: process.env.OWNER_NAME || "Ayaan-Gojo",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
