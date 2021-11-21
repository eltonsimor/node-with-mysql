var dbConnection = require('../../config/dbConnection');

module.exports = (app) => {
    app.get('/noticias', (req, res) => {
        
        var connection = dbConnection();

        connection.query('select * from noticias', (error, result, fields) => {
            if(error){
                console.log(error);
            }
            res.render('noticias/noticias', {noticias: result});
        });

    });
}
