import express from 'express'
import auth from '../controllers/auth.js'
import authCallback from '../controllers/authCallback.js'

const router = express.Router()

router.get('/', auth)
router.get('/callback', authCallback)

export default router
