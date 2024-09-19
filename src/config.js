/**
 * Конфигурация приложения.
 * @module config
 */

import dotenv from 'dotenv'
dotenv.config()

export const scope = 'oauth-user-show oauth-goal-subscribe'
export const port = 3000

export const clientId = process.env.CLIENT_ID
export const clientSecret = process.env.CLIENT_SECRET
export const redirectUri = process.env.REDIRECT_URI
export const sessionSecret = process.env.SESSION_SECRET
