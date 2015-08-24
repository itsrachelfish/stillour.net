// Start the server
var config = require('./config');
var server = require('wetfish-server').createServer(config);

// Add some routes
require('./routes/pages')(server);
