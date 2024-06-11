const { Router } = require("express");
const { get, getUsers, createUser, updateUser, deleteUser, loginPsge, singupPage, homepage } = require("../controllers/user.controller");
const isValid = require("../middlewares/dataValid");

let userRoute = Router();

userRoute.get("/", get);
userRoute.get("/users", getUsers)
userRoute.post("/add", isValid, createUser)
userRoute.patch("/:id", updateUser)
userRoute.delete("/:id", deleteUser)


userRoute.get("/login", loginPsge)
userRoute.get("/signup", singupPage)
userRoute.get("/index", homepage)

module.exports = userRoute;