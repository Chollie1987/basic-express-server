require('dotenv').config();
const { start } = require('./server.js');
const { dbConnection } = require('./models/index.js');
const PORT = process.env.PORT || 3000;

dbConnection
.sync()
.then(() => {
 start(PORT);
}).catch(error => {
    console.log(error);
});