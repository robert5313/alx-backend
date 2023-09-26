import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();
const cGet = promisify(client.get).bind(client);

client.on("error", (error) => {
  if (error) console.log(`Redis client not connected to the server: ${error}`);
}).on('ready', () => {
  console.log('Redis client connected to the server');
});

function setNewValue(key, value) {
  client.set(key, value, (error, reply) => {
    redis.print(`Reply: ${reply}`);
  });
}

const displayValue = async (key) => {
  const reply = await cGet(key);
  console.log(reply);
}

(async () => {
  await displayValue('YourKey');
  setNewValue('YourKey', 'YourValue');
  await displayValue('YourKey');
})();
