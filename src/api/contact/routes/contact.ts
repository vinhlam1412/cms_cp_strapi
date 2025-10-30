// /src/api/contact/routes/contact.ts
export default {
  routes: [
    {
      method: 'POST',
      path: '/contact/send',
      handler: 'contact.send',
      config: { auth: false }, // hoặc bật auth theo nhu cầu
    },
  ],
};

