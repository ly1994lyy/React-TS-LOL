module.exports = options => {
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const adminUser = require("../models/AdminUser");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "无效的token");
    const { id } = jwt.verify(token, req.app.get("secret"));
    assert(id, 401, "无效的用户名！");
    req.user = await adminUser.findById(id);
    assert(req.user, 401, "用户不存在！");
    await next();
  };
};
