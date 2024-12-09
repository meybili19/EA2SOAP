const swaggerDocument = {
    swagger: "2.0",
    info: {
      title: "API SOAP",
      description: "Documentación de la API SOAP - Hola Mundo",
      version: "1.0.0"
    },
    paths: {
      "/wsdl": {
        "get": {
          "summary": "Obtener el WSDL del servicio SOAP con el get del Hola Mundo",
          "responses": {
            "200": {
              "description": "WSDL disponible"
            }
          }
        }
      }
    }
  };
  
  module.exports = swaggerDocument;
    