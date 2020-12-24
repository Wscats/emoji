const javascript = require('./javascript.json');
const css = require('./css.json');
const html = require('./vue-html.json');
const fs = require('fs');
let javascriptMD = '|API|Prefix|Description|\n|-|-|-|\n';
let cssMD = '|API|Prefix|Description|\n|-|-|-|\n';
let htmlMD = '|API|Prefix|Description|\n|-|-|-|\n';
Object.keys(javascript).map((item) => {
    // 生成 md
    javascriptMD += `|\`${javascript[item].body}\`|${javascript[item].prefix}|${javascript[item].description}|\n`;
})
Object.keys(css).map((item) => {
    // 生成 md
    cssMD += `|\`${css[item].body}\`|${css[item].prefix}|${css[item].description}|\n`;
})
Object.keys(html).map((item) => {
    // 生成 md
    htmlMD += `|\`${html[item].body}\`|\`${html[item].prefix}\`|${html[item].description}|\n`;
})
fs.writeFileSync('./javascript.md', javascriptMD);
fs.writeFileSync('./css.md', cssMD);
fs.writeFileSync('./html.md', htmlMD);
