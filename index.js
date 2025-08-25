import express from 'express'
import { router } from './users/users.js'


const port = 8000
const app = express()

app.use((req, res, next) => {
    console.log('Время ', Date.now())
    next()
})

app.get('/hello', (req, res) => {
    res.send('Hello')
})

app.use('/users', router)



app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`)
})

