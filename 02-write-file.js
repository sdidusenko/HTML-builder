const fs = require('fs');
const { stdin, stdout } = process;

fs.writeFile('./02-write-file/text.txt', '', error => {
  if (error) throw error;
})

stdout.write('Введите текст:\n');
stdin.on('data', data => {
  fs.appendFile('./02-write-file/text.txt', data, error => {
    if (error) throw error;
  })
}
);

process.on('SIGINT', () => {
  console.log("Файл сохранен! Удачи!!!");
  process.exit();
});
