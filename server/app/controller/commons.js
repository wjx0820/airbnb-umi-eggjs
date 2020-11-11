const BaseController = require("./base");

class CommonsController extends BaseController {
  async citys() {
    const { ctx, app } = this;
    try {
      // const result = await app.httpclient.request(
      //   "https://apis.imooc.com/?icode=89773B5DA84CA283",
      //   {
      //     dataType: "json",
      //   }
      // );
      // console.log(result)
      const result = {
        status: 200,
        data: {
          citys: [
            [
              { label: "杭州", value: "10001" },
              { label: "苏州", value: "10002" },
              { label: "上海", value: "10003" },
              { label: "绍兴", value: "10004" },
              { label: "大同", value: "10005" },
              { label: "嘉兴", value: "10006" },
              { label: "芜湖", value: "10007" },
              { label: "上尧", value: "10008" },
            ],
          ],
        },
      };
      if (result.status === 200) {
        this.success(result.data.citys);
      } else {
        this.error("获取城市数据失败");
      }
    } catch (error) {
      this.error("获取城市数据失败");
    }
  }
}

module.exports = CommonsController;
