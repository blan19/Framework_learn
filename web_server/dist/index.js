"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 4000;
app.post("/register", function (req, res, next) {
    console.log(req.body);
    next();
});
app.post("/register", function (req, res) {
    res.send({ message: "hello World..!", success: true });
});
app.listen(port || 4001, function () {
    console.log("connected web server port : ", port);
});
//# sourceMappingURL=index.js.map