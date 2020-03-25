module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const router = express.Router({
    mergeParams: true
  });
  const adminUser = require("../../models/AdminUser");

  const authMiddleware = require("../../middleware/auth");
  const resourceMiddleware = require("../../middleware/resource");

  router.post("/", async (req, res) => {
    switch (req.Model.modelName) {
      case "Item":
      case "Hero":
      case "Category":
        const itemIsValid = await req.Model.findOne({name:req.body.name})
        if(itemIsValid){
          return res.status(422).send({
            message:'名称已存在！'
          })
        }
        break;
      case "AdminUser":
        const userIsValid = await req.Model.findOne({username:req.body.username})
        if(userIsValid){
          return res.status(422).send({
            message:'用户已存在！'
          })
        }
        return req.params.username;
        break;
      case "Article":
        const articleIsValid = await req.Model.findOne({title:req.body.title})
        if(articleIsValid){
          return res.status(422).send({
            message:'文章名已存在！'
          })
        }
        break;
    }
   
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  router.get("/", async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    if (req.Model.modelName === "Article") {
      queryOptions.populate = "categories";
    }
    const model = await req.Model.find().setOptions(queryOptions);
    res.send(model);
  });

  router.get("/:id", async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const model = await req.Model.findById(req.params.id).setOptions(
      queryOptions
    );
    res.send(model);
  });

  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });

  app.use(
    "/admin/api/rest/:resource",
    resourceMiddleware(),
    authMiddleware(),
    router
  );

  const multer = require("multer");
  const upload = multer({ dest: __dirname + "/../../uploads" });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:4000/uploads/${file.filename}`;
    res.send(file);
  });

  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;
    adminUser.create({ username: "wzry", password: "123" }); //第一次登陆之后请删除此行代码
    const user = await adminUser.findOne({ username }).select("+password");
    assert(user, 422, "用户不存在！");
    const isValid = require("bcrypt").compareSync(password, user.password);
    assert(isValid, 422, "密码错误！");
    const token = jwt.sign({ id: user._id }, app.get("secret"));
    res.send({ token, user });
  });

  //错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
