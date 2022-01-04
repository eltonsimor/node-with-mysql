-- CRIAÇÃO DO BANDO DE DADOS
CREATE DATABASE dbnoticias;

-- CRIAÇÃO DA TABELA NOTÍCIAS
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50),
    resumo VARCHAR(100),
    autor VARCHAR(100),
    noticia VARCHAR(255),
    data_noticia TIMESTAMP,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DADOS INICIAIS
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 1', 'Resumo da Notícia 1', 'Autor da Notícia 1', 'Texto da Notícia 1', CURRENT_TIMESTAMP);
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 2', 'Resumo da Notícia 2', 'Autor da Notícia 2', 'Texto da Notícia 2', CURRENT_TIMESTAMP);
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 3', 'Resumo da Notícia 3', 'Autor da Notícia 3', 'Texto da Notícia 3', CURRENT_TIMESTAMP);
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 4', 'Resumo da Notícia 4', 'Autor da Notícia 4', 'Texto da Notícia 4', CURRENT_TIMESTAMP);
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 5', 'Resumo da Notícia 5', 'Autor da Notícia 5', 'Texto da Notícia 5', CURRENT_TIMESTAMP);
INSERT INTO noticias (titulo, resumo, autor, noticia, data_noticia) VALUES('Notícia 6', 'Resumo da Notícia 6', 'Autor da Notícia 6', 'Texto da Notícia 6', CURRENT_TIMESTAMP);