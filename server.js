const express = require('express');
const soap = require('soap');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const app = express();
const port = 3000;


const wsdlPath = './hello_world.wsdl';


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

soap.listen(app, '/soap', service, wsdlPath);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello world from JavaScript with  architecture style SOAP with documentation Swagger <3');
});

app.listen(port, () => {
  console.log(`Servidor SOAP escuchando en http://localhost:${port}`);
});
