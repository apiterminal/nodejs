var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    // files: './path/to/nwfiles/**/**', // use the glob format
    // files: ' F:\\WebstormProjects\\promagen-one\\nwfiles\\**\\**', // use the glob format
    files: ['./app/**'],
    platforms: [
        // 'osx64',
        // 'win32',
        // 'win64',
        'linux64'
    ],
    version: '0.17.5'
});

// Log stuff you want
nw.on('log', console.log);

nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
