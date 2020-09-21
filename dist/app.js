"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./route/todos"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
//リクエストの結果をjsonにパースしてオブジェクトにして、reqのbodyに格納する。
app.use(body_parser_1.json());
//todosへのリクエストは全てtodoRouterのルーティング設定を使用する
app.use('/todos', todos_1.default);
//エラー処理を行うミドルウェア関数
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
