import { getCollection } from '../src/utils/mongodb.js';

async function clean() {
  const collection = await getCollection('ai_qa', 'messages');
  await collection.deleteMany({});
}

(async () => {
  try {
    await clean();
    console.log('Clean completed');
  } catch (err) {
    console.error('Clean failed:', err);
  } finally {
    process.exit(0);
  }
})();
