import {Router} from 'express';

import {createTodo} from '../controllers/todos'
import {getTodos} from '../controllers/todos'
import {updateTodo} from '../controllers/todos'
import {deleteTodo} from '../controllers/todos'

const router = Router();
//サーバーを起動して'/'にリクエストが飛んだとき、自動的にcreateTodoという関数が呼び出される
router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;