import express from 'express';

// Streams Controllers
import {
  getEventsController,
  createEventController
} from '../controllers/events';

const router = express.Router();

router.get('/', getEventsController);

router.post('/', createEventController);

export default router;
