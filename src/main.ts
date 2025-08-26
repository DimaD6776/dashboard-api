import { App } from "./app";
import { LoggerS } from "./logger/logger.service";


async function bootstrap() {
    const app = new App(new LoggerS())
    app.init()
}

bootstrap()