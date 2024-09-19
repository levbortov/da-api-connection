import express from 'express'
import path from 'path'
import getUser from './controllers/getUser.js'

const router = express.Router()

const getFrontend = (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}

router.get('/', getFrontend)
router.get('/user', getUser)

export default router
