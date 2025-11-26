/**
 * logo controller
 */

import { factories } from '@strapi/strapi'

/**
 * logo controller - customAction: tìm nhiều industry cùng lúc, pagination, populate
 */


export default factories.createCoreController('api::logo.logo', ({ strapi }) => ({
  async customAction(ctx) {
    try {
      // Lấy query params
      // industries: CSV string hoặc array (industries[]=A&industries[]=B)
      // page, pageSize
      const { industries, page = '1', pageSize = '10'} = ctx.query;

      // parse page / pageSize
      const pageNum = Math.max(1, parseInt(Array.isArray(page) ? page[0] : page as string, 10) || 1);
      const sizeNum = Math.max(1, Math.min(1000, parseInt(Array.isArray(pageSize) ? pageSize[0] : pageSize as string, 10) || 10)); // giới hạn pageSize <= 1000

      // Build industry array from query param
      let industryArray: string[] = [];
      if (industries) {
        if (Array.isArray(industries)) {
          // industries[]=A&industries[]=B
          industryArray = (industries as string[]).flatMap(s => String(s).split(',').map(x => x.trim()).filter(Boolean));
        } else {
          // industries=A,B,C
          industryArray = String(industries).split(',').map(s => s.trim()).filter(Boolean);
        }
      }

      // Build "where" filter. Nếu không truyền industries => lấy tất cả.
      const where: any = {};
      if (industryArray.length > 0) {
        // Filter dựa trên relation industries.name $in [...]
        where.industries = { name: { $in: industryArray } };
      }

      // tính offset / limit
      const limit = sizeNum;
      const start = (pageNum - 1) * limit;

      // Find matching logos, populate image + industries
      const logos = await strapi.db.query('api::logo.logo').findMany({
        where,
        populate: ['image', 'industries'],
        limit,
        offset: start,
      });

      // total count để tính pagination
      const total = await strapi.db.query('api::logo.logo').count({ where });

      const pageCount = Math.max(1, Math.ceil(total / limit));

      // sanitize mỗi entity trước khi trả (dùng sanitizeOutput của controller)
      const sanitized = await Promise.all(
        logos.map(async (e) => await this.sanitizeOutput(e, ctx))
      );

      // Trả về dạng giống Strapi public: data + meta.pagination
      return this.transformResponse({
        data: sanitized,
        meta: {
          pagination: {
            page: pageNum,
            pageSize: limit,
            pageCount,
            total,
          },
        },
      });
    } catch (err: any) {
      strapi.log.error('logo.customAction error:', err);
      // Trả lỗi 500 với message
      return ctx.internalServerError('Internal server error');
    }
  },
}));
