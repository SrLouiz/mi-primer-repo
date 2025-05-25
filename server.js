const express = require('express');
const path = require('path');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta raíz
app.use(express.static(path.join(__dirname, '/')));

// Ruta principal que sirve el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta de API básica para demostrar funcionalidad backend
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: '¡Hola desde el servidor!',
    timestamp: new Date().toISOString()
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

