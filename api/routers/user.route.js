import express from 'express'
const router = express.Router()

import { test } from '../controllers/user.controller.js'
router.get('/user', test)

export default router
