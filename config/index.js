require('dotenv').config();

const config = {
    uri: process.env.URI,
    port: process.env.PORT,
    dbo: process.env.dbo,
}

module.exports = config;
