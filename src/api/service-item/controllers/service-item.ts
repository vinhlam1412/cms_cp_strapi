/**
 * service-item controller
 */

import { factories } from '@strapi/strapi'

//export default factories.createCoreController('api::service-item.service-item');
export default factories.createCoreController('api::service-item.service-item', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query('api::service-item.service-item').findOne({
            where: { slug },
            populate: {
                serviceContent: {
                    populate: true,
                },
                seo: {
                    populate: true,
                },        
            },
        });

        if (!entity) {
        // Trả về 404 
        return ctx.notFound('Service item not found');
        }

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
}
}));
