module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "app"),
      password: env("DATABASE_PASSWORD", "kgAZkCW1Z5043gQAbiVu"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
})
