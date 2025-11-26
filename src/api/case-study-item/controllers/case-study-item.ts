/**
 * case-study-item controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::case-study-item.case-study-item",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const { locale } = ctx.query;

      console.log("slug", slug);
      console.log("locale", locale);

      const entity = await strapi.db
        .query("api::case-study-item.case-study-item")
        .findOne({
          where: { slug, locale },
          populate: {
            case_study_service: {
              populate: true,
            },
            seo: {
              populate: {
                openGraph: { populate: ["ogImage"] },
                metaImage: true,
              },
            },
            thumbnail: true,
            blocks: {
              populate: {
                results: true,
                primaryCTA: true
              }
              // populate: {
              //   "section.case-study-result": {
              //      populate: ['results'] 
              //    },
              //   "shared.card": true,
              // },
              // populate: {
              //   "section.case-study-result": {
              //     populate: {
              //       results: true,
              //     },
              //   },
              //   "shared.card": true,
              // },
            },
          },
        });

      if (!entity) {
        return ctx.notFound("Case Study item not found");
      }

      // ensure related_news_items exists even if empty
      if (!entity.case_study_service) {
        entity.case_study_service = {};
      }
      if (!entity.blocks.results) {
        entity.blocks.results = [];
      }

      return { data: entity };
    },
  })
);

//export default factories.createCoreController('api::case-study-item.case-study-item');
