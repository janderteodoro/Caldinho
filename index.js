const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const mongoCLient = require('mongodb').MongoClient;
const app = express();
const port = config.port;
const uri = config.uri;
const routes = require('./src/routes');

app.use(bodyParser.json());

routes.homePage(app);
routes.register(app, mongoCLient, uri);

app.listen(port, () => {
    console.log(`App runnig in http:/localhost:${port}`);
});
