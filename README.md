# 基于React(Antd)+Express+MongoDB的王者荣耀后台管理

## Vue版本的请前往 [基于vue(Element)+node(Express)+mongodb的王者荣耀手机端和管理后台](https://github.com/ly1994lyy/vue-node-moba)

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
- 注意：后端使用的是4000端口，如果4000端口被占用需要使用其他端口请到admin/src/utils目录下的config.js和http.js更改本机使用的端口
- 使用浏览器打开 http://localhost:3000/login
(如果3000端口已被占用地址可能不一样)，在两个输入框随便输入东西进行提交后(会显示用户不存在)，使用以下用户进行登陆,登陆后可自己建立其他管理员：
```
username:wzry
password:123
```
> ## 3.项目截图
![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ9C.UVUqosYdBehgRoYp74yPJMfsC8IQ2TA.26bi2r7CBR4zxTIJqagdTehXi*polFy7Hv.*XBOogfSyAaxhg.Y!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ7ujjv3efS4oXgvvxepgFvZiNdIUJ9UpBH*H0EHCONaWmHbiJ1lE13.3DoOCoPDXoKJk7X7*Q2Ub7KBkoAQA5uQ!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ5jZPvervIWJzSsIbdhQDYXPfbJTPWJHXX.Z4CQqXUzsklcvxyF80yDRMnN.tPzKrebdTqvCVl21wX1emQIdRTU!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ*YyGprQ4sQlSV46RLoTX.tcd2lL5DesMB5jHHQFKkmDlxBGRzSSia56HTXxiivX*Ax8go7HZXa4zBQ0tDOUFq8!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ*a05ibHKar3.yjRP6JjSWv7Nlotsdikb33yNNlGww..7jpEiY0.qP2TF1hWhT6tzA9aJr8cvPwW.H688JUarLw!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ9C7zvRL5xx2cdi3.ZTaBUr1vx.y5pep0XnpgIsDB8pA225IvJCkSlrScfnwkjSBmQiGiR5.KyPPeXzQPDakaxY!/r)

![image](http://r.photo.store.qq.com/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ7g5Ehj5TdP7G4LlmcUSsWbZUCCzM9ocjdzzZrupDQAFsmizVi81wuzxym.d8UgXbIB5RcwDAkka1Bx8U*wgdro!/r)

![image](http://m.qpic.cn/psc?/V14DeYi14ANerh/8x9yFjEE1.JqOZi1gudBZ1N*lwqW8YaPauHtdz9b0BqkL3jwampIuWPC9QS3HyvadF*pvhnvS0fLtfOXxIl*a0gG*s1UTGZPbPLxZzya7cA!/b&bo=iQWAAn4HYgMDGSo!&rf=viewer_4)

> 结束语：目前还有一些bug，后续会优化代码以及拓展功能
