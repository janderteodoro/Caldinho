const register = ({app, mongoCLient, uri, dataBase}) => {

    app.post('/test', (req, res) => {
        try{

            const { weigthData } = req.body;
            const date = new Date();
            const obj = {weigthData, date};

            mongoCLient.connect(uri, (error, db) => {
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