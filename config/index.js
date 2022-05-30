require('dotenv').config();

const config = {
    uri: process.env.URI,
    port: process.env.PORT,
}

module.exports = config;
