export default {
  async send(ctx) {
    const { to, subject, html, text } = ctx.request.body;

    await strapi.plugin('email').service('email').send({
      to,
      subject,
      html: html ?? '<p>Hello world!</p>',
      text: text ?? 'Hello world!',
      // from/replyTo sẽ lấy từ settings nếu không truyền
    });

    ctx.body = { ok: true };
  },
};
