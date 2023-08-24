const readline = require('readline');
const OpenAI = require('./controllers/openaiController')
const { generateMeta } = require('./controllers/openaiController')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Video title:\n ', generateMeta );
