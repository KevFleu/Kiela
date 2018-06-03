exports.serveur = {
    port: '8080',
    host: '0.0.0.0',
    staticFiles: './static'
};

exports.mongo = {
    url: 'mongodb://127.0.0.1:27017',
    options: {
		connectTimeoutMS: 1000,
        socketTimeoutMS: 1000,
        autoReconnect: false
    }
};
