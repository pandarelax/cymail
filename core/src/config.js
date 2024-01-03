export const development = {
    port: process.env.DEV_PORT || 3000,
    database: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 5432,
        username: process.env.DEV_DB_USERNAME || 'your_dev_username',
        password: process.env.DEV_DB_PASSWORD || 'your_dev_password',
        database: process.env.DEV_DB_NAME || 'your_dev_database'
    },
    redis: {
        host: process.env.DEV_REDIS_HOST || 'localhost',
        port: process.env.DEV_REDIS_PORT || 6379,
        password: process.env.DEV_REDIS_PASSWORD || ''
    },
};
export const production = {
    port: process.env.PROD_PORT || 3000,
    database: {
        host: process.env.PROD_DB_HOST || 'localhost',
        port: process.env.PROD_DB_PORT || 5432,
        username: process.env.PROD_DB_USERNAME || 'your_prod_username',
        password: process.env.PROD_DB_PASSWORD || 'your_prod_password',
        database: process.env.PROD_DB_NAME || 'your_prod_database'
    },
    // Add more configuration options for production environment
};
