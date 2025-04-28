// backend/routes/personas.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Listar todas las personas
router.get('/', async (req, res) => {
    try {
        const pool = await db;
        const result = await pool.request().query('SELECT * FROM Personas');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Crear una nueva persona
router.post('/', async (req, res) => {
    const { Nombre, Apellido, Email, Telefono } = req.body;
    try {
        const pool = await db;
        const result = await pool.request()
            .input('Nombre', sql.NVarChar, Nombre)
            .input('Apellido', sql.NVarChar, Apellido)
            .input('Email', sql.NVarChar, Email)
            .input('Telefono', sql.NVarChar, Telefono)
            .query('INSERT INTO Personas (Nombre, Apellido, Email, Telefono) VALUES (@Nombre, @Apellido, @Email, @Telefono)');
        res.status(201).json({ message: 'Persona creada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Editar una persona
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Nombre, Apellido, Email, Telefono } = req.body;
    try {
        const pool = await db;
        const result = await pool.request()
            .input('Id', sql.Int, id)
            .input('Nombre', sql.NVarChar, Nombre)
            .input('Apellido', sql.NVarChar, Apellido)
            .input('Email', sql.NVarChar, Email)
            .input('Telefono', sql.NVarChar, Telefono)
            .query('UPDATE Personas SET Nombre = @Nombre, Apellido = @Apellido, Email = @Email, Telefono = @Telefono WHERE Id = @Id');
        res.json({ message: 'Persona actualizada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar una persona
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await db;
        const result = await pool.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM Personas WHERE Id = @Id');
        res.json({ message: 'Persona eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;