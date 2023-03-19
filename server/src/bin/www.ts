// import http = require('http');
require('dotenv').config();
const app = require('../app');

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} and ${process.env.NODE_ENV} environment`);
})
