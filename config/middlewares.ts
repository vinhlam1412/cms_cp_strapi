export default [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com'],
          'connect-src': ['https://proxy-event.ckeditor.com'],

          //Custom plugin ebemded video
          'frame-src': [
            "'self'",
            'https://www.youtube.com',
            'https://www.youtube-nocookie.com',
            'https://player.vimeo.com',
          ],
          'child-src': [
            "'self'",
            'https://www.youtube.com',
            'https://www.youtube-nocookie.com',
            'https://player.vimeo.com',
          ],
          'img-src': ["'self'", 'data:', 'blob:'],
          'media-src': ["'self'", 'data:', 'blob:'],
        },
      }
    }
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '200mb',
      formLimit: '200mb',
      textLimit: '200mb',
      multipart: true,
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
