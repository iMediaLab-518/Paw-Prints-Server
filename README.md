# Paw-Prints-Server
[![Build Status](https://travis-ci.org/iMediaLab-518/Paw-Prints-Server.svg?branch=master)](https://travis-ci.org/iMediaLab-518/Paw-Prints-Server)

- “爪印”项目后台服务器

### 目录结构
```
├── assets                              静态资源( Less、Sass & JavaScript)
├── middleware                          中间件
│   ├── auth.js                         路由是否登录拦截
│   ├── ...
├── node_modules                        Node 依赖
├── pages                               存放页面
│   ├── index.vue                       首页
│   ├── ....
├── plugins                             存放 Javascript 插件
├── server                              服务器后台
│   ├── api.js                          服务器端接口
│   ├── db.js                           数据库接口
│   ├── router.js                       服务器端路由
│   ├── service.js                      服务器主体
│   ├── ....
├── static                              静态文件
├── util                                存放工具文件
│   ├── net.js                          封装网络请求
│   ├── ...
├── test                                测试相关
│   ├── test.js                         自动化测试
├── README.md                           README
```
