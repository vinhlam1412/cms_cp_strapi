export default {
  routes: [
    {
      method: 'GET',
      path: '/service-items/:slug',
      handler: 'service-item.findOne',
      config: { auth: false }, // hoặc bật auth theo nhu cầu
    },
  ],
};

