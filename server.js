const express = require('express');
const app = express();
const { UI, setQueues } = require('bull-board');
const { taskQueue } = require('./lib/queue');

setQueues([taskQueue]);
app.use('/', UI);

app.listen(7890);
