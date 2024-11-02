const express = require('express');
const cors = require('cors');
const database = require('./db');
const Usuario = require('./models/Usuario');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

(async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        
        await database.sync();

        app.get('/api/usuarios', async (req, res) => {
            const listaUsuarios = await Usuario.findAll();
            res.json(listaUsuarios);
        });

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();