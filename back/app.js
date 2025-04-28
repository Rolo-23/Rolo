// backend/app.js
const express = require('express');
const cors = require('cors');
const personasRoutes = require('./routes/personas');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/personas', personasRoutes);

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});