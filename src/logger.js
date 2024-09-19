import winston from 'winston'

const { createLogger, format, transports } = winston
const { combine, timestamp, printf } = format

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
    level: 'info', // Минимальный уровень логирования
    format: combine(timestamp(), customFormat),
    transports: [
        new transports.Console(),
        /*
        // Только для работы на локальном хосте
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
         */
    ],
})

export default logger
