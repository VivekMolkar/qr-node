const fs = require('fs');
const qrcode = require('qrcode');

run().catch(error => console.error(error.stack));

async function run() {
    const res = await qrcode.toDataURL('https://hubengage.com');

    fs.writeFileSync('./qr.html', `<img src="${res}">`);
    console.log('done');
}