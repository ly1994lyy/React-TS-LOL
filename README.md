# 基于React(Antd)+Express+MongoDB的王者荣耀后台管理

## ==Vue版本的请前往== [基于vue(Element)+node(Express)+mongodb的王者荣耀手机端和管理后台](https://github.com/ly1994lyy/vue-node-moba)

> ## 1.文件说明：
- admin:使用vue-cli(4.2.3)创建的所有前端页面文件
- serve：后端代码以及数据库

> ## 2.如何运行：
- 代码下载到本地后，进入admin和serve分别进行
```
npm install 或者 cnpm install 或者 yarn install
```
- 进入admin，运行

```
npm run serve 或者 yarn start
```
- 进入serve,运行
```
npm run serve(本机装有nodemon可使用此命令) 或者 node index.js
```
- ==注意==：后端使用的是4000端口，如果4000端口被占用需要使用其他端口请到admin/src/utils目录下的config.js和http.js更改本机使用的端口
- 使用浏览器打开 http://localhost:3000/login
(如果3000端口已被占用地址可能不一样)，在两个输入框随便输入东西进行提交后(会显示用户不存在)，使用以下用户进行登陆,登陆后可自己建立其他管理员：
```
username:wzry
password:123
```
> ## 3.项目截图
![image](https://note.youdao.com/yws/api/personal/file/WEBa068c2019b5720d6b570f5aec6f8af7f?method=getImage&version=840&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB51b5c709ed3d17d56479fc893a7876b9?method=getImage&version=839&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB1f444a4dcbf331946c527908116a309e?method=getImage&version=841&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB1bf763a4578b89ce35e2e5152ae936f9?method=getImage&version=842&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB2d3af7663ee76e02632264dc1970dfda?method=getImage&version=844&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEBdf5bb6a61f987664f0f60c6ebc9a2d28?method=getImage&version=843&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB60e43d262036f4b1f61c9abfdb090ecc?method=getImage&version=838&cstk=58-pfqqA)

![image](https://note.youdao.com/yws/api/personal/file/WEB4a44d283e74a3b23c06aa854e97495ec?method=getImage&version=837&cstk=58-pfqqA)

> 结束语：目前还有一些bug，后续会优化代码以及拓展功能
