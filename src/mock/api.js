import Mock from 'mockjs' //导入插件库
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|1001-1100": 12,
    "username": "admin",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})