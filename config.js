const dotenv=require('dotenv').config({path: './.env'});

module.exports={
APP_PORT:process.env.APP_PORT,
CLIENT_ID:process.env.CLIENT_ID,
CLIENT_SECRET:process.env.CLIENT_SECRET,
REDIRECT_URI:process.env.REDIRECT_URI
}