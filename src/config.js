require('dotenv').config();

module.exports = {
DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
MONGODB_URI : process.env.MONGODB_URI,
PORT : process.env.PORT || 3000
};
  