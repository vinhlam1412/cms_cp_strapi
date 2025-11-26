/**
 * news-item controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController(
  'api::news-item.news-item',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const { locale } = ctx.query;

      const entity = await strapi.db.query('api::news-item.news-item').findOne({
        where: { slug, locale },
        populate: {
          related_news_items: {
            populate: ['image'],
            fields: ['title', 'documentId', 'createdAt'],
          },
          seo: { populate: { openGraph: { populate: ['ogImage'] }, metaImage: true } },
          shareButton: { populate: ['image'] },
          image: true,
        },
      });

      if (!entity) {
        return ctx.notFound('News item not found');
      }

      // ensure related_news_items exists even if empty
      if (!entity.related_news_items) {
        entity.related_news_items = [];
      }

      return { data: entity };
    },
  })
);

//export default factories.createCoreController('api::news-item.news-item');


