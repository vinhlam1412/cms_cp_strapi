// import type { Core } from '@strapi/strapi';

import { startMailWorker } from "./utils/mailWorker";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // Ensure `strapi` is available as a global for plugins/services that reference it directly.
    // Some plugin dist code uses the free variable `strapi` (not injected), which requires it
    // to exist on the global object.
    (globalThis as any).strapi = strapi;
    startMailWorker(strapi);
  },
};
