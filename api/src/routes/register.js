const register = ({app, mongoClient, uri, dataBase}) => {

    app.post('/register', (req, res) => {
        try { 

            const { weigthData } = req.body;
            const date = new Date();
            const obj = {weigthData, date};

            mongoClient.connect(uri, (error, db) => {
                if (error) throw error;
                const dbo = db.db(dataBase);
                dbo.collection('weigth').insertOne(obj, (error, res) => {
                    if ( error ) throw error;
                    console.log('1 document inserted');
                    db.close();
                })
            })

        } catch(e){
            console.log('ERRRO=> ', e);
            throw e;
        } finally {
            res.json({
                message: 'Temos um avanço aqui'
            });
        }
    })

}

module.exports = register;
