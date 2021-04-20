const path = require('path');

var url = path.resolve(process.cwd(), process.env.HTML_FILE);
var start =
    process.platform == 'darwin'
        ? 'open'
        : process.platform == 'win32'
        ? 'start'
        : 'xdg-open';
require('child_process').exec(start + ' ' + url);
