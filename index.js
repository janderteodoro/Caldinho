const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const app = express();
const port = config.port;
const uri = config.uri;
const dataBase = config.dbo;
const routes = require('./src/routes');

app.use(bodyParser.json());

routes.homePage(app);
routes.register({app, mongoClient, uri, dataBase});
routes.ready({app, mongoClient, uri, dataBase});

app.listen(port, () => {
    console.log(`App runnig in http:/localhost:${port}`);
});
