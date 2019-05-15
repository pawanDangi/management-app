import express from 'express';
import bodyParser from 'body-parser';

import events from './routes/events';

const app = express();

app.use(bodyParser.json());

// Use routes
app.use('/api/events', events);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
