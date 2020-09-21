import express, {Request, Response, NextFunction} from 'express'

import todoRoutes from './route/todos'
import {json} from 'body-parser'


const app = express();

//リクエストの結果をjsonにパースしてオブジェクトにして、reqのbodyに格納する。
app.use(json());

//todosへのリクエストは全てtodoRouterのルーティング設定を使用する
app.use('/todos', todoRoutes)

//エラー処理を行うミドルウェア関数
app.use((err:Error, req: Request, res: Response, next: NextFunction)=>{
    res.status(500).json({message:err.message})
})

app.listen(3000);