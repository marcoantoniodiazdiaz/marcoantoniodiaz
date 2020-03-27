import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// ANGULAR
server.app.use(express.static('public'));

// CORS
server.app.use(cors({ origin: true, credentials: true }));


server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
