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
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
});
