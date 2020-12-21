const emojis = require('./emoji.json');
const fs = require('fs');
let hbuilder = {};
let md = '|Emoji|Prefix|\n|-|-|\n';
Object.keys(emojis).map((item) => {
    // 生成 hbuilder 的 prefix
    emojis[item].prefix.map((prefix, index) => {
        hbuilder[item + index] = {
            ...emojis[item],
            prefix
        }
    })
    // 生成 md
    md += `|${emojis[item].body}|${emojis[item].prefix}|\n`;
})
fs.writeFileSync('./hbuilder.json', JSON.stringify(hbuilder));
fs.writeFileSync('./emoji.md', md);