export default {
  routes: [
    {
      method: 'GET',
      path: '/logo/customAction',
      handler: 'logo.customAction',
      config: { auth: false },
    },
  ],
};

