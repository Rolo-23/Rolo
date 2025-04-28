-- Crear la base de datos
CREATE DATABASE MiAppDB;
GO

USE MiAppDB;
GO

-- Crear la tabla Personas
CREATE TABLE Personas (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefono VARCHAR(20)
);
GO