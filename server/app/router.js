"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post("/api/user/register", controller.user.register);
  router.post("/api/user/login", controller.user.login);
  router.post("/api/user/detail", controller.user.detail);
  router.post("/api/user/logout", controller.user.logout);
};