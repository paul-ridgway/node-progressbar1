const ProgressBar = require('progress');
const ansiEscapes = require('ansi-escapes');
const write = process.stdout.write.bind(process.stdout);

let bar = new ProgressBar('Processing [:bar] :percent', {
   complete: '=',
   incomplete: '-',
   width: 30,
   total: 100
});

// Start by clearing the screen and positioning the cursor on the second line 
// (because the progress bar will be positioned on the first line)
write(ansiEscapes.clearScreen + ansiEscapes.cursorTo(0, 0));

let i = 0;
setInterval(() => {
   ++i;
   write(ansiEscapes.eraseLine);
   console.log('Now at -------- ', i);


   write(ansiEscapes.cursorSavePosition + ansiEscapes.cursorTo(0, process.stdout.rows));
   write(ansiEscapes.eraseLine);
   write(`Sausage ${i}`)
   write(ansiEscapes.cursorRestorePosition);

  
}, 100);
