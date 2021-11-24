import express, { NextFunction, Request, Response } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rota
app.use(usersRoute);

app.get(' /status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar' });
});

app.use(statusRoute);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação execultando na porta 3000!');
});