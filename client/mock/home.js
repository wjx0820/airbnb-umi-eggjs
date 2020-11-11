export default {
  'post /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: [
        [
          { label: '杭州', value: '10001' },
          { label: '苏州', value: '10002' },
          { label: '上海', value: '10003' },
          { label: '绍兴', value: '10004' },
          { label: '大同', value: '10005' },
          { label: '嘉兴', value: '10006' },
          { label: '芜湖', value: '10007' },
          { label: '上尧', value: '10008' },
        ],
      ],
    });
  },
  'post /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          img:
            'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
          title: '东城民宿',
          info: '东城区交通方便',
          price: '100',
        },
        {
          id: 2,
          img:
            'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: '120',
        },
        {
          id: 3,
          img:
            'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
          title: '新区民宿',
          info: '新区民宿位置优越',
          price: '200',
        },
        {
          id: 4,
          img:
            'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
          title: '老城民宿',
          info: '老城区风景秀美',
          price: '220',
        },
      ],
    });
  },
};
