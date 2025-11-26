export default {
  routes: [
    {
      method: 'GET',
      path: '/case-study-item/:slug',
      handler: 'api::case-study-item.case-study-item.findOne',
      config: { auth: false }, // hoặc bật auth theo nhu cầu
    },
  ],
};

