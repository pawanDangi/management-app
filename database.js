import { MongoClient } from 'mongodb';

const db = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dangipawan:pd9617395070@cluster0-e0vzn.mongodb.net/test?retryWrites=true'
  );

  const db = await client.db('test');

  return db;
};

export default db;
