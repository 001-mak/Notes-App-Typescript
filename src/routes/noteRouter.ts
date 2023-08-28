import express from 'express'
const router = express.Router();
import {createNote, getNotes, updateNote} from '../controllers/noteController'

router.get("/notes", getNotes);
router.post("/create-note", createNote);
router.put("/update-note/:id", updateNote);

export default router;