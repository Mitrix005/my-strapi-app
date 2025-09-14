// config/database.js (Strapi v5 style)
module.exports = ({ env }) => {
    const databaseUrl = env('DATABASE_URL', '');

    if (databaseUrl) {
        return {
            connection: {
                client: 'postgres',
                connection: databaseUrl,
                pool: { min: 2, max: 10 },
                options: { ssl: { rejectUnauthorized: false } },
            },
            debug: false,
        };
    }

    // fallback na sqlite (lokalnie)
    return {
        connection: {
            client: 'sqlite',
            connection: { filename: env('DATABASE_FILENAME', '.tmp/data.db') },
            useNullAsDefault: true,
        },
    };
};
