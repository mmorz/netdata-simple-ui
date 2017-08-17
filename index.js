const pug = require('pug');

const saveOutput = require('./src/serialize');

const locals = {
  chartHeight: '130px',
};

const html = pug.renderFile('./template/index.pug', locals);
saveOutput(html);
