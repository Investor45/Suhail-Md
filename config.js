const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "237670217260" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237670217260";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_44_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1SEdSVEx4WlE1RWNFRk9RS2VIMWluOUN5cGhEWmRHMGQwYk9iWE00QWtJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5dDJ3ZEZiU1R2MjBOUktwdEZLQzlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2NzNmMjZhLTFkMWQtNDE2MS1hNTk2LTZkMDdiMDA0YjQ0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAzOSxcbiAgICAgIDI0NyxcbiAgICAgIDQ1LFxuICAgICAgMTMyLFxuICAgICAgMjM4LFxuICAgICAgMjI5LFxuICAgICAgMjM4LFxuICAgICAgMjM0LFxuICAgICAgMjU0LFxuICAgICAgMjMwLFxuICAgICAgMTkzLFxuICAgICAgNzEsXG4gICAgICAxNzAsXG4gICAgICAyMjcsXG4gICAgICAyMTUsXG4gICAgICAxMDAsXG4gICAgICAyMTUsXG4gICAgICAyOSxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA5MSxcbiAgICAgIDExNixcbiAgICAgIDg3LFxuICAgICAgMjM1LFxuICAgICAgMyxcbiAgICAgIDI0MixcbiAgICAgIDYzLFxuICAgICAgMjI0LFxuICAgICAgNTQsXG4gICAgICAyMjEsXG4gICAgICAyMTMsXG4gICAgICA3NyxcbiAgICAgIDMzLFxuICAgICAgOTIsXG4gICAgICAxMjcsXG4gICAgICAxMzksXG4gICAgICAxMTgsXG4gICAgICA5NixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyOUhLMUQ1M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjcwMjE3MjYwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCiS0VOVEVDSOKAoiBBLkl+XCIsXG4gICAgXCJsaWRcIjogXCIyNDQ2NTAyOTYyMjE3NDE6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlodWdRUWlQM0h0UVlZVVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbkZRZ3Q4Wm5qdjdyM3pKR2JueUlRUzdKOGdYd1FCMjFLTW0xWmV0VlVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjA5V1VTRklEVGVybzFIeGxBb29xMlh6UE15Qmt4ZXZYeU1EYm8xWE5tZUpFTmNTclIvcXpwUVM5Q2hSenRaSnBPdnRoeTJkaWZCSXJ6UmRaM0V4VUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdCOFIvUkVuZkJPODdrYTlrQkt4aGFjVk5xRktoUU9iMnF5d1NhSmV5OEhFV1hZeE5IQXNhTmd0OWxwMlJLcWc2QllUK3ZtSXByN3ArUGI4eGhGSUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY3MDIxNzI2MDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk0MTA2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxYbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFhsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2hQcnZZNWhSMXNIa2E2TlByL213bFRlaW8xcHMwZmxnODdvaHhJTWFiST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzQzMTkyLFwiY3VycmVudEluZGV4XCI6NzYsXCJkZXZpY2VJbmRleGVzXCI6WzY0LDAsNzZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
