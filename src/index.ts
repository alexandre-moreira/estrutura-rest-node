import express from 'express';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Configurações de Rotas
app.use(userRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});