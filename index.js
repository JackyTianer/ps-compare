var PSD = require('psd');
var shell = require("shelljs");
var argv = require('./argv.js');
var fs = require('fs');

var files = fs.readdirSync(argv.p);
for(var i = 0 ; i < files.length; i++){
    if(files[i].indexOf('psd') === -1){
        files.splice(i, 1);
    }
}
if (files.length != 2) {
    console.log('the directory must have 2 psd files');
    return;
}

var path;
if (argv.p[argv.p.length - 1] === '/') {
    path = argv.p;
} else {
    argv.p += '/';
    path = argv.p;
}

PSD.open(path + files[0])
    .then(function (psd) {
        return psd.image.saveAsPng('img/1.png');
    })
    .then(function () {
        return PSD.open(path + files[1]);
    })
    .then(function (psd) {
        return psd.image.saveAsPng('img/2.png');
    })
    .then(function () {
        var port = argv.P;
        shell.exec('open http://127.0.0.1:' + port + '/compare.html');
        shell.exec('node_modules/http-server/bin/http-server -c1 -p ' + port);
    });