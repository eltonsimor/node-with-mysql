var app = require('./config/server');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta: ${PORT}`);
});