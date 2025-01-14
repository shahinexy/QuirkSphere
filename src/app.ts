import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { BlogRouters } from './app/Modules/Blog/blog.route'

const app: Application = express()

//perser
app.use(express.json())
app.use(cors())

app.use('/api/blogs', BlogRouters)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;