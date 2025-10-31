// ví dụ: /src/api/contact/controllers/contact.ts
export default {
  async send(ctx) {
    try {
      const { name, phone, email, services, message, subject } = ctx.request.body;

      if (!name || !email || !message) {
        return ctx.badRequest("Thiếu thông tin cần thiết.");
      }
      console.log('[SMTP PROD]', process.env.SMTP_HOST, process.env.SMTP_PORT, 'secure=true', !!process.env.SMTP_USERNAME);

      const servicesArr = Array.isArray(services) ? services : (services ? [services] : []);

      // Tạo nội dung email HTML
      const html = `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>📩 Thông tin liên hệ mới từ website CreativePoint</h2>
          <p><strong>Người gửi:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Số điện thoại:</strong> ${phone || "Không cung cấp"}</p>
          <p><strong>Dịch vụ quan tâm:</strong> ${servicesArr.join(', ')}</p>
          <p><strong>Nội dung:</strong></p>
          <div style="background:#f8f8f8;padding:10px;border-radius:8px">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr/>
          <p style="font-size:12px;color:#888">
            Email này được gửi tự động từ form liên hệ trên website.
          </p>
        </div>
      `;

      const text = `
        Liên hệ mới từ website CreativePoint:
        - Người gửi: ${name}
        - Email: ${email}
        - Số điện thoại: ${phone || "Không cung cấp"}
        - Dịch vụ: ${servicesArr.join(', ')}
        - Nội dung: ${message}
      `;

      // Gửi email bằng plugin email
      await strapi.plugin("email").service("email").send({
        from: 'vinhlam1412@gmail.com',
        to: 'vinhlam1412@gmail.com',
        subject: subject || 'Liên hệ mới từ website CreativePoint',
        html: html,
        text,
      });

      ctx.send({ ok: true });

      //  await strapi.plugin("email").service("email").send({
      //   to: 'vinhlam1412@gmail.com',
      //   from: 'vinhlam1412@gmail.com', //e.g. single sender verification in SendGrid
      //   cc: 'vinhlam1412@gmail.com',
      //   bcc: 'vinhlam1412@gmail.com',
      //   replyTo: 'vinhlam1412@gmail.com',
      //   subject: 'The Strapi Email feature worked successfully',
      //   text: 'Hello world!',
      //   html: 'Hello world!',
      // })

      //ctx.send({ ok: true });

    } catch (err) {
      console.error("Email send error:", err);
      ctx.internalServerError("Không thể gửi email. Vui lòng thử lại sau.");
    }
  },
};
