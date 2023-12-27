module.exports = {
    port: 3000, // The port number your app will listen on
    database: {
        host: 'localhost', // Database host
        port: 5432, // Database port
        username: 'your_username', // Database username
        password: 'your_password', // Database password
        database: 'your_database' // Database name
    },
    // Add more configuration options as needed
};
module.exports = {
    development: {
        port: process.env.DEV_PORT || 3000,
        database: {
            host: process.env.DEV_DB_HOST || 'localhost',
            port: process.env.DEV_DB_PORT || 5432,
            username: process.env.DEV_DB_USERNAME || 'your_dev_username',
            password: process.env.DEV_DB_PASSWORD || 'your_dev_password',
            database: process.env.DEV_DB_NAME || 'your_dev_database'
        },
        // Add more configuration options for development environment
    },
    production: {
        port: process.env.PROD_PORT || 3000,
        database: {
            host: process.env.PROD_DB_HOST || 'localhost',
            port: process.env.PROD_DB_PORT || 5432,
            username: process.env.PROD_DB_USERNAME || 'your_prod_username',
            password: process.env.PROD_DB_PASSWORD || 'your_prod_password',
            database: process.env.PROD_DB_NAME || 'your_prod_database'
        },
        // Add more configuration options for production environment
    }
};
