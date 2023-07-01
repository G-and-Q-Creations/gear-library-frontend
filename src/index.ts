import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// THIS LINE CONNECTS FILES TOGETHER
app.use(express.static('dist'))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(process.cwd() + '/index.html')
    console.log('whatever')
})

app.get('/about', (req: Request, res: Response) => {
    res.sendFile(process.cwd() + '/about.html')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
