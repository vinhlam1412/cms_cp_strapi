import type { StrapiApp } from "@strapi/strapi/admin";
import {
  setPluginConfig,
  getPluginPresets, // preset mặc định do plugin export sẵn
} from "@_sh/strapi-plugin-ckeditor";

const youtubeOnlyProviders = [
  {
    name: "youtube",
    // Nhận cả youtube.com và youtu.be
    url: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i,
    // CKEditor đã có provider YouTube sẵn; chỉ cần giới hạn lại nếu muốn.
    // Nếu không cần giới hạn, có thể bỏ mảng providers này.
  },
];

export default {
  // register(app: StrapiApp) {
  //   // Lấy các preset mặc định mà plugin đã khởi tạo sẵn
  //   const presets = getPluginPresets();

  //   // Bảo vệ: nếu vì lý do gì preset không tồn tại, tạo khung tối thiểu
  //   if (!presets.defaultHtml) {
  //     presets.defaultHtml = {
  //       name: "Default HTML editor",
  //       description: "HTML editor",
  //       editorConfig: { toolbar: [], plugins: [] },
  //     } as any;
  //   }

  //   // Ghi đè cấu hình cho preset HTML mặc định
  //   presets.defaultHtml.editorConfig = {
  //     ...presets.defaultHtml.editorConfig,
  //     toolbar: {
  //       items: [
  //         "heading",
  //         "|",
  //         "bold",
  //         "italic",
  //         "link",
  //         "bulletedList",
  //         "numberedList",
  //         "blockQuote",
  //         "codeBlock",
  //         "|",
  //         "mediaEmbed",
  //         "|",
  //         "undo",
  //         "redo",
  //       ],
  //     },
  //     mediaEmbed: {
  //       // Lưu preview (iframe) vào dữ liệu cho các provider "previewable" (YouTube/Vimeo/Spotify…)
  //       // Xem docs CKEditor: previewsInData lưu ra <iframe> thay vì <oembed>
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/media-embed.html
  //       previewsInData: true,
  //       // tuỳ chọn: giới hạn còn mỗi YouTube
  //       //providers: youtubeOnlyProviders,
  //     },
  //   };

  //   // Gắn lại cấu hình cho plugin trước bootstrap (cấu hình chỉ set được 1 lần)
  //   setPluginConfig({
  //     presets: [
  //       presets.defaultHtml,
  //       presets.defaultMarkdown ?? undefined,
  //     ].filter(Boolean) as any,
  //     theme: undefined,
  //   });
  // },

  bootstrap(app: StrapiApp) {
    strapi.server.httpServer.requestTimeout = 30 * 60 * 1000;
    console.log(app);
  },
};
