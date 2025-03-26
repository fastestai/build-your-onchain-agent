import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URI);
let isConnected = false;

async function ensureConnected() {
  if (!isConnected) {
    await mongoClient.connect();
    isConnected = true;
  }
}

process.on('beforeExit', async () => {
  if (isConnected) {
    await mongoClient.close();
    isConnected = false;
  }
})

export async function getCollection(dbName, collectionName) {
  await ensureConnected();
  return mongoClient.db(dbName).collection(collectionName);
}
