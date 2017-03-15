/**
 * Created by jackytianer on 2017/2/20.
 */

var argv = require('yargs')
    .option('p', {
        'alias': 'path',
        'demand': true,
        'default': 'psd',
        'describe': 'your psd files folder path',
        'type': 'string'
    })
    .option('P', {
        'alias': 'port',
        'demand': false,
        'default': 9813,
        'describe': 'server port',
        'type': 'number'
    })
    .help('h')
    .example('fd -n psd', 'used psd folder to compared')
    .alias('h', 'help')
    .argv;

module.exports = argv;


