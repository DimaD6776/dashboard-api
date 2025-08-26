import express, { Express } from "express";
import { router } from "./users/users";
import { Server } from "http"
import { LoggerS } from "./logger/logger.service";


export class App{
    app: Express
    server: Server
    port: number
    logger: LoggerS

    constructor(logger: LoggerS) {
        this.app = express()
        this.port = 8000
        this.logger = logger
    }

    useRoutes() {
        this.app.use('/users', router)
    }

    public async init() {
        this.useRoutes()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}