const express = require('express');
const logger = require('winston');

const app = express();
const port = 8080;

app.use(express.static('dist'));
app.listen(port);

logger.info(`listening on port ${port}`);
