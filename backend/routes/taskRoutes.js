import express from 'express';
import { getTasks, createTask, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';
import validateTask from '../middleware/validateTaskMiddleware.js';

const router = express.Router();

// Get all tasks and create a new task
router.route('/')
  .get(getTasks)
  .post(validateTask, createTask);

// Get, update, and delete task by ID
router.route('/:id')
  .get(getTaskById)
  .put(validateTask, updateTask)
  .delete(deleteTask);

export default router;