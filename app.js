const fs = require('fs');

const files = fs.readdirSync('$');
console.log('Current Directory', files);

fs.readdir('../', (err, files) => {
    if (err) {
        console.error('Error', err);
        return;
    }
    else {
        console.log('Parent Directory', files);
    }
});