"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const todos_2 = require("../controllers/todos");
const todos_3 = require("../controllers/todos");
const todos_4 = require("../controllers/todos");
const router = express_1.Router();
//サーバーを起動して'/'にリクエストが飛んだとき、自動的にcreateTodoという関数が呼び出される
router.post('/', todos_1.createTodo);
router.get('/', todos_2.getTodos);
router.put('/:id', todos_3.updateTodo);
router.delete('/:id', todos_4.deleteTodo);
exports.default = router;
