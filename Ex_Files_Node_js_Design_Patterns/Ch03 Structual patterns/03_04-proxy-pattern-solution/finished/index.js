var path = require('path');
var FS_Proxy = require('./FS_Proxy');

// FS_proxy prevent us from reading txt file, instead interact with fs

var fs = new FS_Proxy(require('fs'));

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}
// if not comment out this, it will throw error because we prevent from reading from txt
// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
