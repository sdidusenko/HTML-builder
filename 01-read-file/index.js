const fs = require('fs');
const read = fs.readFile('text.txt', 'utf8', (error, content) => {
  if (error) throw error;
  console.log(content);
});

