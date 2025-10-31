type EnvFunction = (key: string, defaultValue?: string | number | boolean) => string | number | boolean;

interface SMTPAuthConfig {
  user?: string;
  pass?: string;
}

interface EmailProviderOptions {
  host: string;
  port: number;
  auth: SMTPAuthConfig;
}

interface EmailSettings {
  defaultFrom: string;
  defaultReplyTo: string;
}

interface EmailConfig {
  provider: string;
  providerOptions: EmailProviderOptions;
  settings: EmailSettings;
}

interface UploadBreakpoints {
  xlarge: number;
  large: number;
  medium: number;
  small: number;
  xsmall: number;
}

interface UploadConfig {
  providerOptions: {
    localServer: {
      maxage: number;
    };
  };
  sizeLimit: number;
  breakpoints: UploadBreakpoints;
}

interface SEOConfig {
  enabled: boolean;
}

interface PluginConfig {
  seo: SEOConfig;
  email: { config: EmailConfig };
  upload: { config: UploadConfig };
}

const config = ({ env }: { env: EnvFunction }): PluginConfig => {
  console.log(
    '[SMTP PROD]',
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    'secure=true',
    !!process.env.SMTP_USERNAME
  );

  return {
    seo: {
      enabled: true,
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com') as string,
          port: Number(env('SMTP_PORT', 587)),
          auth: {
            user: env('SMTP_USERNAME') as string,
            pass: env('SMTP_PASSWORD') as string,
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
            maxage: 300000,
          },
        },
        sizeLimit: 250 * 1024 * 1024, // 250MB
        breakpoints: {
          xlarge: 1920,
          large: 1000,
          medium: 750,
          small: 500,
          xsmall: 64,
        },
      },
    },
  };
};

export default config;
