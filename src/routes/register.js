const register = (app, mongoCLient, uri) => {
    

    app.post('/test', (req, res) => {
        try{

            const { weigthData } = req.body;
            + weigthData;
            console.log(typeof weigthData);
        
            mongoCLient.connect(uri, (error, db) => {
                if (error) throw error;
                const dbo = db.db('Caldinho');
                dbo.collection('weigth').insertOne(weigthData, (error, res) => {
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