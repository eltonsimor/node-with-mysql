module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.salvar_noticia(app, req, res);
    });
}
