
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEg3NWIzM3ZNdmJKK2xsUmN4RlgycFErWTJtcUdzSXFtV3BLM204T1YzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlVJc0Y3SFZ2UFc5R21iUDh1T3FpNUdGenBQdS9TV2ZvVEx6UXc3N2lrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SS82WkxzcUZWc3FzRDUxeUo3ZjhTQ1pSRHEwd1o5Ny9QYkd0N0ExbDNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aVF3V28vS0Q4S0Q1QUsrY1pKVk93UFVGbmU1ZHdyZzROZ2tLQUNsQVVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQMFQvQ0lObE5wbTRWU2wyTzRrTmlmcng5aTFac093dm1QZk5oU2s4SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2TTlmUGNNNC9TWjVLRVZhWmZ1OEFVMERLWVRVRXpKM0xmUzZqWXI4MFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBCdDJJdGN6WC94dDhadklaZkxxcSsrTENyaS9FVEVxOGMwUWVHUW4yOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRyt2N01DcWJRN0loT1JrcjFQUEl5K0UrZlY2WVBNZjJNNzF3ZjFjVlFYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCdWxnMzhRaXN6WmM4TFlCdGZ1SUF5QjNWMmJqUndGTVhjTHZGc3lSUWJqbmJlQ1lzYWQxWkJJVjhJcUV3UHVBSlg1TFZrVTZqN0F2MkhXOVlucUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Ii9EdGJES25lajZiQmZQU09nS1kzTnhWZWgyeDduNlRrZDB2cVFrZG80Rm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im4yTU1EaXN4U2tLZGlTajdVamxscHciLCJwaG9uZUlkIjoiZWU4MWJjNmUtZmU1Yi00NzFkLTkzMTEtN2ZjMmU2YTc5YjZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUrZGlyVE5ycW9LOTR5YzBySWNucDBMWG1YVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidERvQkREMkl2bCtVcnBGbDVIRzdmTW1mSUxjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3p6bWFZREVLYllyN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN09iZDRlRlRMejBlUHMrMlF2WGx3SDZzWEo3SXYwQnpHeVNIZFE2NjZ5dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVmRCODBPalp2QTllVlNaWk1QWVJsb20wYW13L2ptWmhBd3hneWVjM3ZQdEJyeTZoZ1I3Ny9CaUYvdENFcUtqcHFOK00rd2JLdzFReGh2S2FEWThyRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhuZ0ExekFZOHhLbDRlbGpLRFdNUEJ4Si9BQ3J2UHNNL2tNRlByeWRwZ1AwdElXRnF3OFdleFhuN3pJcDVwWFdML3dVdno3RHNhbWRsb3I2cU5mcEJBPT0ifSwibWUiOnsiaWQiOiI5MjMwNjQ4OTY5NDM6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oiGTG9WZSBGdWNrZXIg4oiGeWFhbuKIhlxuXG5BXG5cbmtcblxuVVxuXG5tXG5cbkFcblxu4oiGRXZpTCBTb3Vs4oiGIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2NDg5Njk0Mzo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlem0zZUhoVXk4OUhqN1B0a0wxNWNCK3JGeWV5TDlBY3hza2gzVU91dXNzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTQzMTU1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJhWSJ9" //Make sure session id starts with Byte;;;



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
