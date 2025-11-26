export default {
  routes: [
    {
      method: 'GET',
      path: '/news-items/:slug',
      handler: 'news-item.findOne',
      config: { auth: false }, 
    },
  ],
};

