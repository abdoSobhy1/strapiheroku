module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'fr-int-web1049.main-hosting.eu'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u246990223_testdb'),
      user: env('DATABASE_USERNAME', 'u246990223_Hozayen'),
      password: env('DATABASE_PASSWORD', '9bkN1Fo&'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
