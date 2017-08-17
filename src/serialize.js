const fs = require('fs');
const logger = require('winston');

const path = './dist';

function packOutput(html) {
  fs.mkdir(path, (err) => {
    if (!err) {
      logger.info(`created ${path} dir`);
    }

    fs.writeFile(`${path}/index.html`, html, (saveErr) => {
      if (saveErr) throw saveErr;
      logger.info('template compile done');
    });
  });
}

module.exports = packOutput;
