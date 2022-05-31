const ready = ({app, mongoClient, uri, dataBase}) => {

    app.get('/ready', (req, res) => {

        try {
            
            mongoClient.connect(uri, (error, db) => {
                if (error) throw error;
                const dbo = db.db(dataBase);
                dbo.collection('weigth').find({}).toArray((error, result) => {
                    if (error) throw error;
                    console.log(result);
                    res.json({ result })
                    db.close();
                })
            });

        } catch(error) {
            console.log('ERROR => ', error);
        }

    });
}

module.exports = ready;
