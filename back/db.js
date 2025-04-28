// backend/db/db.js
const sql = require('mssql');

const config = {
    user: 'rolo', // Cambia esto por tu usuario de SQL Server
    password: 'TuClavesegura123!', // Cambia esto por tu contraseña
    server: 'localhost', // Cambia esto si usas un servidor remoto
    database: 'MiAppDB',
    options: {
        encrypt: true, // Usa esto si estás conectando a Azure SQL
        trustServerCertificate: true // Usa esto para conexiones locales
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conexión exitosa a la base de datos');
        return pool;
    })
    .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = poolPromise;