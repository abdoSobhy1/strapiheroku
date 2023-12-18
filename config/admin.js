module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4536c9330f6bcc06446b823614fcf44'),
  },
});
