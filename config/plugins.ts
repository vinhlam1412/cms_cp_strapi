export default ({ env }) => (
  console.log('[SMTP PROD]', process.env.SMTP_HOST, process.env.SMTP_PORT, 'secure=true', !!process.env.SMTP_USERNAME),
  {
  seo: {
    enabled: true,
  },
   email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'vinhlam1412@gmail.com',
        defaultReplyTo: 'vinhlam1412@gmail.com',
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
