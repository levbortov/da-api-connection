/**
 * Запуск сервера и инициализация приложения
 * @module server
 */

import app from './src/app.js'
import logger from './src/logger.js'
import { port } from './src/config.js'

/** Запуск приложения */
app.listen(port, () => {
    logger.info(`Приложение запущено на порту ${port}`)
})
