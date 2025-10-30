export default ({ env }) => ({
  seo: {
    enabled: true,
  },
   email: {
    config: {
      provider: 'nodemailer', // dùng provider Nodemailer
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env.int('SMTP_PORT', 587),
        secure: env.bool('SMTP_SECURE', false), // true nếu dùng 465
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'no-reply@example.com'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'no-reply@example.com'),
        testAddress: env('EMAIL_TEST', 'test@example.com'),
      },
    },
  },
   upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
});
