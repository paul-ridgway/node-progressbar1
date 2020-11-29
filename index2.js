var blessed = require('blessed');

var screen = blessed.screen(),
  body = blessed.box({
    top: 1,
    left: 0,
    width: '100%',
    height: '99%'
  }),
  statusbar = blessed.box({
    top: 0,
    left: 0,
    width: '100%',
    height: 1,
    style: {
      fg: 'white',
      bg: 'blue'
    }
  });

screen.append(statusbar);
screen.append(body);

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

function status(text) { statusbar.setContent(text); screen.render(); }
function log(text) { body.insertLine(0, text); screen.render(); }

status('TEST');

var spawn = require('child_process').spawn;

yes = spawn('seq', ['100000']);

yes.stdout.on('data', function (data) {
  log(data.toString());
});

yes.stderr.on('data', function (data) {
  log(data.toString());
});