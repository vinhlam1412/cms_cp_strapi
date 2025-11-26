/**
 * feature-item controller
 */

import { factories } from '@strapi/strapi'

//export default factories.createCoreController('api::feature-item.feature-item');
export default factories.createCoreController('api::feature-item.feature-item',({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const { locale } = ctx.query;

      const entity = await strapi.db.query('api::feature-item.feature-item').findOne({
        where: { slug, locale },
        populate: {
          related_feature_items: {
            populate: ['image'],
            fields: ['title', 'documentId', 'createdAt'],
          },
          seo: { populate: { openGraph: { populate: ['ogImage'] }, metaImage: true } },
          shareButton: { populate: ['image'] },
          image: true,
        },
      });

      if (!entity) {
        return ctx.notFound('Features item not found');
      }

      // ensure related_news_items exists even if empty
      if (!entity.related_feature_items) {
        entity.related_feature_items = [];
      }

      return { data: entity };
    },
  })
);