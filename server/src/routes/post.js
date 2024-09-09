import express from 'express'
import * as postController from '../controllers/post'

const router = express.Router()
router.get('/all', postController.getPostController)
router.get('/limit', postController.getPostLimitController)

export default router