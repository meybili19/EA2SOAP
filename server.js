const express = require('express');
const soap = require('soap');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const app = express();
const port = 3000;

// Ruta al archivo WSDL físico
const wsdlPath = './hello_world.wsdl';

// Servicio SOAP que implementa la operación sayHello
const service = {
  HelloWorldService: {
    HelloWorldPort: {
      sayHello: function(args) {
        return {
          greeting: `Hola, ${args.name}!`
        };
      }
    }
  }
};

// Servir el WSDL físico en la ruta /wsdl
app.get('/wsdl', (req, res) => {
  fs.readFile(wsdlPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo WSDL');
      return;
    }
    res.setHeader('Content-Type', 'text/xml');
    res.send(data);
  });
});

// Crear el servicio SOAP
soap.listen(app, '/soap', service, wsdlPath);

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello world from JavaScript with  architecture style SOAP with documentation Swagger <3');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor SOAP escuchando en http://localhost:${port}`);
});
