
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Ayaan:3167441892ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923167441892@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU005RlVtYUFIeTVPTUVnSjVFNnB2cjFvZVdmTWt4ZUZyaUpGYm5EZStucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnJuUi8yQ0dzdXh2bnBnRkl4cGZqbTF4alp5TjJkYXhoSDlqM0E1d1Mxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ3FYd2pTWGo1QThVT3BoMFFRekNTTGdHYjdLSEpIUmI3RTZhZHIydFg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TU1RV21MNWlJZjdNbVZiS3hDbmhZbk1zRmo5cVZ0d0NJVXZUVU00cUdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDdXdQUWErQTFFR3RNcDh3dEhzQThDK29RLzF0OFhoeHJaZUwwaTJ1bGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZnRTdJYnBYVTBRWkpmUUFxVnUyNk9TRDloNXJBQWNEVElzOVBjNWF3a009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk84c1diSUxZdlFVRFZ3cUt5cXhMSm8zQ3Y4K0tlaExjRXBUMk90WHkwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3Zva0o1SVJyNnZ2U1h4NkVWL3MxeHNJTHJqUHE1ZDJNWGpkUUhXV1JCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVzbFZzcENYNkI0bDVqTkMzejMwRVRyNjl1bjhFYTNpYlB5ZmF4dHYyckZoU3Q3VTJmTGRqM0lRV2dBcVFzM3NLcmJBZW5hTnJzNlVmeTRkRUwxVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJCaEpkdnJDUEV0akhGbHZVK0Y4RDIyb1FjbVdLdWVmZWpLem02VTZnL0xFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE2NzQ0MTg5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NEQzMzFDODRFM0MxMTUzQ0E2OEE0MDFBRkRCREFGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTcwMjY4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2aDdwN2lGd1JrT2ZrRmsyNWFLY2ZnIiwicGhvbmVJZCI6IjE2NTYyNjc0LWQxNzgtNDlkNS1hMmFmLWUxMjczYjg3NmE1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWE50NkhJSmdzb1dBelRBM0NqY2h2dXRsQVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDVYdGRVWnRaWWJtUlBsS1A2SXVPZFNqTzYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ4NkpDV05YIiwibWUiOnsiaWQiOiI5MjMxNjc0NDE4OTI6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09paGtxSUNFSXFzc2JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpUK1hDRCtUemZKVVRaalBYK2dsMWV1T0FCUlBhREYydktFWFNIbjdSMGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllRcXEzZUJobmp5eXdGb2s5c2hqdTRjT2I5b1RjUEptaWZWaTdUN1hBRHBVTThTenJCZTFQdWxTT1g1b3h6UThETUpiQVc3WHlmZWJPSUR0QVFZY0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnTUVQdWF0d1hCKzNmRFovVmhOZU1vTTJ3cCszQUtlZlR1MEpudDRWbkoxUXVxeVg5NG8rSmU5YTlBL2FaRnlqUEM5TktCdjc0ektKcXB3SkhVTi9EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2NzQ0MTg5MjoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVS9sd2cvazgzeVZFMll6MS9vSmRYcmpnQVVUMmd4ZHJ5aEYwaDUrMGRJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTcwMjYzfQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Arooj*",
  author: process.env.PACK_AUTHER || "Akuma💀",
  packname: process.env.PACK_NAME || "🏳️‍🌈",
  botname: process.env.BOT_NAME || "Ayaan-MD",
  ownername: process.env.OWNER_NAME || "Ayan-Gojo",
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
