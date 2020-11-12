module.exports = (options) => {
  return async (ctx, next) => {
    const token = ctx.request.token;
    const username = await ctx.app.redis.get(ctx.username);

    // 比较 redis 里存的用户名和请求传过来的是否相等
    const user = username ? username === token : username;

    if (!user && !options.exclude.includes(ctx.request.url.split("?")[0])) {
      ctx.body = {
        status: 1001,
        errMsg: "用户未登录",
      };
    } else {
      await next();
    }
  };
};
