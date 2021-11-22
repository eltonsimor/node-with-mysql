module.exports.noticias = (app, req, res) => {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error, result) => {
        if(error){
            console.log(error);
        }
        res.render('noticias/noticias', {noticias: result});
    });
}

module.exports.noticia = (app, req, res) => {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia((error, result) => {
        if(error){
            console.log(error);
        }
        res.render('noticias/noticia', {noticia: result});
    });
}