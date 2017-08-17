const pug = require('pug');

const saveOutput = require('./src/serialize');

const locals = {
  dev: process.env.NETDATA_API === 'dev',
  ram: 923,
  chartHeight: '130px',
  timeRange: 30 * 60,
};
const html = pug.renderFile('./template/index.pug', locals);
saveOutput(html);
