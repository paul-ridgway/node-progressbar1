const ProgressBar = require('progress');
const ansiEscapes = require('ansi-escapes');
const write       = process.stdout.write.bind(process.stdout);

let bar = new ProgressBar('Processing [:bar] :percent', {
  complete   : '=',
  incomplete : '-',
  width      : 30,
  total      : 100
});

// Start by clearing the screen and positioning the cursor on the second line 
// (because the progress bar will be positioned on the first line)
write(ansiEscapes.clearScreen + ansiEscapes.cursorTo(0, 1));

let i = 0;
setInterval(() => {
  // Save cursor position and move it to the top left corner.
  write(ansiEscapes.cursorSavePosition + ansiEscapes.cursorTo(0, 0));

  // Update the progress bar.
  bar.tick();

  // Restore the cursor position.
  write(ansiEscapes.cursorRestorePosition);

  // Write a message every 10 ticks.
  if (++i % 1 === 0) {
    console.log('Now at', i);
  }

  // We're done.
  if (i === 100) {
    process.exit(0);
  }
}, 100);