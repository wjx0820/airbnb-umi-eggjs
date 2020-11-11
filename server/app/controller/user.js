"use strict";

const Controller = require("egg").Controller;
const md5 = require("md5");

class UserController extends Controller {
  async jwtSign() {
    const { ctx, app } = this;
    const username = ctx.request.body.username;
    const token = app.jwt.sign({ username }, app.config.jwt.secret);
    // ctx.session.username = 1;
    await app.redis.set(username, 1, "EX", app.config.redisExpire);
    return token;
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);

    if (user) {
      ctx.body = {
        status: 500,
        errMsg: "用户已经存在",
      };
      return;
    }

    const result = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (result) {
      const token = await this.jwtSign();

      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(result.dataValues, ["password"]),
          createTime: ctx.helper.timestamp(result.createTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: "注册用户失败",
      };
    }
  }

  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);

    if (user) {
      const token = await this.jwtSign();

      ctx.session.username = 1;
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, ["password"]),
          createTime: ctx.helper.timestamp(user.createTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: "该用户不存在",
      };
    }
  }

  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, ["password"]),
          createTime: ctx.helper.timestamp(user.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: "该用户不存在",
      };
    }
  }
  async logout() {
    const { ctx, app } = this;
    try {
      await app.redis.del(ctx.username);
      ctx.body = {
        status: 200,
        data: "ok",
      };
    } catch (error) {
      ctx.body = {
        status: 500,
        errMsg: "退出登录失败",
      };
    }
  }
}

module.exports = UserController;