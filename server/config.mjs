export default {
    port: process.env.PORT || 3001,
    database: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT || 27017,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASS,
        database: process.env.MONGO_DB || 'nakedbudget'
    },
    auth: {
        saltRounds: process.env.AUTH_SALT_ROUNDS || 13,
        jwtSecret: process.env.AUTH_JWT_SECRET || 'naked_dev_secret',
        jwtExpiration: `${process.env.AUTH_JWT_EXPIRATION_SECONDS || 600}s`
    }
};
