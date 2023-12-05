const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "+994403816355"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://i.imgur.com/C1p1pVI.jpg' // add your username
global.sudo = process.env.SUDO || '994403816355' 
global.devs = '994403816355';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+994403816355
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/C1p1pVI.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0h6bVJHaDcvbE9pWEpCbWVuK1RKMllIeVBJYkswR2lzWFpWWTNDK3Nucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzFkSXh2SlZMZFpmZC80UFZ2czNQWEZwUWQ0RkZHUkhzbWdvbEREYzgzVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDREZTOWZBNGc0OXVLOUhJenZEVFpPTHpvTFZLc2NVNlhvbDQ0WFYyeUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSGVBaE5XUFMzMzhNbVhWeGtneVlxOW14ZWphbDFKOHBMZ0pmRThPQWg0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJZFFWR3YyZzdzNmdZWHpSazVSUFRBemNWeTlGV0p4OEt6azRJUmh5WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFTL2VzRVJvYmlQQTNJYjEwZjJXM0RubDMvZmVuSS9WVTYvUlgzZTdtVDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzdDNwY05yYjROMUNVQkdaemhqbThXZHdlMXVCNHVNTHFPS2hSMHQ3cGE1elNsZGVCeGxuVWFGZlBKU0ZrTkZhTG1vVWZxY1IrWHAxVGJ6ZGx3UGdnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzNiwiYWR2U2VjcmV0S2V5IjoiVWdTbGNuaWc5K2ZGU0VGOG1ud1ZnU2NwOHVOaEFhbmRqaCt5M0ZVRlZEWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieUFCQWV5dHRSeVdiQjJqMk44anBxQSIsInBob25lSWQiOiI0YzYxZTU1NC03Y2M3LTQwNmEtOTJlMC00ODExZjc1YzQyOTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWktHTzBJc3FpZEs3LzgxblVvdDRSdXNLczY0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVXkycDJyVG41U2FiMVFjWUp4MFRqVkZFMTg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ2F6ZXdFRUxmMm9xc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZUWG1OSnEwanZzdVYvVmZFQnk4dmNRbU5JNjR6ZWUzQnBob3pSaHRiMGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJMdUlQbjJBZHJlYUpuUnhjU04wVUhsUVNWRU9jeWlCa2VZbnVFNzhiWm5DTTRGVzQ3REJQV1dQL216d09lZmhFNTJIUVRYcU9SbFFxOFM2UVYzZEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJETFBEeGpNSVZhc1BkM3VjTEdqcHo2SkFBZStDMzZSVzBZY1pvcjdudXhkNktUKzJTSjR3cUZ0U0U0Tms4bTdnd1YvMm8vczhKTzBYSnFJSjZkejlpZz09In0sIm1lIjp7ImlkIjoiOTk0NDAzODE2MzU1OjhAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDAzODE2MzU1OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWsxNWpTYXRJNzdMbGYxWHhBY3ZMM0VKalNPdU0zbnR3YVlhTTBZYlc5SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTM2MjQ5MH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Zara-Khan',
  packname:  process.env.PACK_NAME || 'Zara-Khan',
   
  botname:   process.env.BOT_NAME === undefined ? "Zara-Khan" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Zara-Khan' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zara-75' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
