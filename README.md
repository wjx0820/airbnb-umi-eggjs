# airbnb-umi-eggjs

类 airbnb 旅游电商项目

## Link

http://jiexi.xyz

## Stack

Frontend

- UmiJS(React.js)
- Antd-mobile

Backend

- EggJS(Node.js)
- MySQL
- Redis

## Features

ReactJS

- 自定义 Hooks
  - useHttpHook (发送 http 请求)
  - useObserverHook (监听 dom 元素是否展示)
  - useImgHook (图片懒加载)
- 自定义组件
  - CreatePortal（根节点之外创建新节点）
  - ErrorBoundary（捕获错误组件）
  - Modal（弹窗组件）
  - MenuBar（底部导航组件）
  - ShowLoading（列表底部 loading 组件

EggJS

- 自定义中间件
  - httpLog（日志）
  - userExist（用户是否存在）
- 自定义插件
  - egg-auth（验证用户）
  - egg-info（系统信息）
  - egg-notFound（接口不存在）

开发流程及亮点

- 前端
  - 列表滚动加载
  - 图片懒加载
  - React.memo 减少渲染次数
- 服务端
  - 用户登录验证 (使用 JWT)
  - 接口拦截 (egg-auth 插件)
- 部署
  - Docker 容器化
  - Nginx 代理
  - 阿里云 OSS 存放图片
- 安全
  - 防御 XSS (eggJS 自带的 ctx.helper.escape 过滤 html 中的标签)
  - 防御 SQL 注入 (egg.validator 验证输入参数类型)
  - 防御 CSRF (egg-allowHosts 插件)
  - 接口限流 (egg-interfaceLimit 插件)
  - 接口缓存 (egg-interfaceCache 插件)

## Screenshots

![](/screenshot/screenshot1.gif)

![](/screenshot/screenshot2.gif)

![](/screenshot/screenshot3.gif)

## TODO

- 优化用户评论功能
- 完善支付功能
