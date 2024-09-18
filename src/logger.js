import winston from 'winston'

// Создание уровня логирования
const { createLogger, format, transports } = winston
const { combine, timestamp, json, printf } = format

// Формат для вывода логов
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`
})

// Создание логгера
const logger = createLogger({
    level: 'info', // Минимальный уровень логирования
    format: combine(timestamp(), customFormat),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
    ],
})

export default logger
