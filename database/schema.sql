CREATE DATABASE restaurante_db;
USE restaurante_db;

CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
);

INSERT INTO menu_items (name, description, price, category) VALUES
('Empanadas', 'Empanadas de carne caseras', 150.00, 'entradas'),
('Asado', 'Asado de tira con chimichurri', 1200.00, 'principales'),
('Flan', 'Flan casero con dulce de leche', 300.00, 'postres');