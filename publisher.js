const redis = require('redis');

const publisher = redis.createClient();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    
readline.question(`send any message to the chat! `, (message) => {
    readline.close();
    publisher.publish("chat", message);
    publisher.quit();
});