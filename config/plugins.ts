export default ({ env }) => (
  console.log('[SMTP PROD]', process.env.SMTP_HOST, process.env.SMTP_PORT, 'secure=true', !!process.env.SMTP_USERNAME),
  {
  seo: {
    enabled: true,
  },
   email: {
    config: {
      provider: 'nodemailer', // dùng provider Nodemailer
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 465),
        secure: env.bool('SMTP_SECURE', true), // true nếu dùng 465
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        logger: true,   // <—
        debug: true,
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'vinhlam1412@gmail.com'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'vinhlam1412@gmail.com'),
        testAddress: env('EMAIL_TEST', 'vinhlam1412@gmail.com'),
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
