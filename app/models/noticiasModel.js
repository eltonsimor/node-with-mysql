module.exports = () => {
    
    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback);
    };

    this.getNoticia = (connection, callback) => {
        connection.query('select * from noticias where id_noticia = 1', callback);
    }

    this.salvarNoticia = (connection, noticia, callback) => {
        connection.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}