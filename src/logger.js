/**
 * Логирование с использованием winston.
 * @module logger
 */

import winston from 'winston'

const { createLogger, format, transports } = winston
const { combine, timestamp, printf } = format

/**
 * Форматирование логов.
 * @function
 * @param {Object} param0 Объект логирования.
 * @param {string} param0.level Уровень лога.
 * @param {string} param0.message Сообщение лога.
 * @param {string} param0.timestamp Время лога.
 * @returns {string} Отформатированное сообщение лога.
 */
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), customFormat),
    transports: [
        new transports.Console(),
        // Логи в файл (раскомментировать при необходимости)
        // new transports.File({ filename: 'logs/combined.log' }),
        // new transports.File({ filename: 'logs/error.log', level: 'error' }),
    ],
})

export default logger
