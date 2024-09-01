module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "your_very_secret_key_1",
      "another_very_secret_key_2",
      "and_a_third_very_secret_key_3",
    ],
  },
  url: env("PUBLIC_URL", "http://207.154.214.237"),
});
