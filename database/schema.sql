CREATE SCHEMA IF NOT EXISTS BOILERPLATE; -- Cambiar el nombre en función de sus necesidades.
USE BOILERPLATE;

-- Borrar o modificar esta tabla a su convenencia, o crear otras según requiera.
CREATE TABLE IF NOT EXISTS USUARIO(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    nombre      VARCHAR(255) NOT NULL
);