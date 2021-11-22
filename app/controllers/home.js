module.exports.index = (app, req, res) => {
    var connection = app.config.dbConnection();
    var noticiasDAO = new app.app.models.NoticiasDAO(connection);

    noticiasDAO.getCincoUltimasNoticias((error, result) => {
        if(error) {
            console.log(error);
        }
        res.render('home/index', {noticias: result});
    });

    
}