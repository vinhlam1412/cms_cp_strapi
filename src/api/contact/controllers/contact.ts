export default {
  async send(ctx) {
    try {
      const { name, phone, email, services, message, subject } = ctx.request.body;

      if (!name || !email || !message) {
        return ctx.badRequest("Thiếu thông tin cần thiết.");
      }

      console.log('[SMTP PROD]', process.env.SMTP_HOST, process.env.SMTP_PORT, 'secure=true', !!process.env.SMTP_USERNAME);

      const servicesArr = Array.isArray(services) ? services : (services ? [services] : []);

      // Nội dung email mới
      const html = `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;">
          <p>Hello Creative Point Team,</p>

          <p>A new customer has just submitted the contact form on the website.<br/>
          Here are the details:</p>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested In:</strong> ${servicesArr.join(', ') || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f8f8f8;padding:10px;border-radius:8px;margin-top:4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>

          <p style="margin-top:20px;">
            Please reach out to the customer as soon as possible to follow up and provide consultation for the solution they have chosen.
          </p>

          <p>Thanks,<br/>Creative Point Team.</p>
        </div>
      `;

      const text = `
              Hello Creative Point Team,

              A new customer has just submitted the contact form on the website.
              Here are the details:

              Name: ${name}
              Phone: ${phone || "Not provided"}
              Email: ${email}
              Service Interested In: ${servicesArr.join(', ') || "Not specified"}
              Message: ${message}

              Please reach out to the customer as soon as possible to follow up and provide consultation for the solution they have chosen.

              Thanks,
              Creative Point Team.
      `;

      // Gửi email bằng plugin email
      await strapi.plugin("email").service("email").send({
        from: 'auto.notification.creativepoint@gmail.com',
        to: 'Cs@creativepoint.vn',
        subject: 'New Contact Form Submission from Website',
        html,
        text,
      });

      ctx.send({ ok: true });
    } catch (err) {
      console.error("Email send error:", err);
      ctx.internalServerError("Không thể gửi email. Vui lòng thử lại sau.");
    }
  },
};
