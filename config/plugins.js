module.exports = ({ env }) => ({
  // ... other plugin configurations ...
  jwtSecret: env("JWT_SECRET"),
});
