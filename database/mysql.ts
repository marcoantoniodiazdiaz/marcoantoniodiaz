import mysql = require('mysql');

export default class MySQL {
    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'gymaccess_db',
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
        });

        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static executeQuery(query: string, callback: Function) {
        this._instance.cnn.query(query, (err: any, results: Object[], fields: any) => {
            if (err) {
                console.log('Error en Query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('El registro solicitado no existe')
            }

            callback(null, results);
        })
    }

    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
            }

            this.conectado = true;
            console.log('Base de datos ONLINE');
        });
    }
}