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
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
