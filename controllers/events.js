import database from '../database';

const getEventsController = async (req, res) => {
  try {
    const db = await database();
    db.collection('quotes')
      .find()
      .toArray(function(err, results) {
        console.log(results);
        // send HTML file populated with quotes here
        res.status(200).json(results);
      });
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error'
    });
  }
};

const createEventController = async (req, res) => {
  try {
    const db = await database();
    db.collection('events').save(req.body, (err, result) => {
      if (err) return console.log(err);

      console.log('saved to database');
      res.status(201).json(result);
    });
  } catch (err) {
    res.status(500).send({
      message: 'Internal Server Error'
    });
  }
};

export { getEventsController, createEventController };
