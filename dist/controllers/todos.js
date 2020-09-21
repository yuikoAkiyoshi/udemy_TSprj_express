"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
//ただのメモリ上への書き込み。プロジェクト再起動で消える。本番ではDBなどを使用すること。
const TODOS = [];
exports.createTodo = (req, res, next) => {
    //tsはリクエストボディーに入ってくる物がどんな方か判別できないので型キャストして教えてあげる
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'TODOを作成しました', newTodo });
};
exports.getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('見つかりませんでした');
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
    res.json({ message: '更新しました', updatedTodo: TODOS[todoIndex] });
};
exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('対象のTODOが見つかりませんでした。');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'TODOを削除しました。' });
};
