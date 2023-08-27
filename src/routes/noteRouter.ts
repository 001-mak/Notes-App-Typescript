import express from 'express'
const router = express.Router();
import {getNotes} from '../controllers/noteController'

router.get("/users", getNotes)

export default router;