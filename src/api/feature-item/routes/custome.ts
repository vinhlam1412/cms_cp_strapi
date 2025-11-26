export default {
  routes: [
    {
      method: 'GET',
      path: '/feature-items/:slug',
      handler: 'feature-item.findOne',
      config: { auth: false }, // hoặc bật auth theo nhu cầu
    },
  ],
};

