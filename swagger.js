const swaggerDocument = {
    swagger: "2.0",
    info: {
      title: "SOAP API",
      description: "Documentation for the SOAP API - Hello World",
      version: "1.0.0"
    },
    paths: {
      "/wsdl": {
        "get": {
          "summary": "Get the WSDL of the SOAP service with the Hello World GET method",
          "responses": {
            "200": {
              "description": "WSDL available"
            }
          }
        }
      }
    }
  };
  
  module.exports = swaggerDocument;
  