export const development = {
    port: process.env.DEV_PORT || 3000,
    database: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 5432,
        username: process.env.DB_USER || 'your_dev_username',
        password: process.env.DB_PASSWORD || 'your_dev_password',
        database: process.env.DB_NAME || 'your_dev_database'
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || ''
    },
};