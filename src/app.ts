
import express, { Request, Response } from 'express'

import router from '.'
import { globalErrorHandler } from './app/middleware/globalErrorHandler'

const app = express()

// middleware
app.use(express.json())

app.use('/api', router)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})


app.use(globalErrorHandler)

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})

export default app

// req, res > jwt funtion next() > function 
// express -> workflow = 
// train -> [router]-[controller -error]-[service - error]-[errorHandler]->