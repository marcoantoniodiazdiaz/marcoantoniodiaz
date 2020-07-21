import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Rutas
import router from './routes/router';
import counter from './routes/counter.routes';
import MySQL from './database/mysql';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// ANGULAR
server.app.use(express.static('public'));

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de MongoDB
server.app.use('/', router);
server.app.use('/', counter);


server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
