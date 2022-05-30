const homePage = (app) => {
    app.get('/', (req, res) => {
        res.json({
            message: 'this is homePage'
        });
    })
}

module.exports = homePage;
