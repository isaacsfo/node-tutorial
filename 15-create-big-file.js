const { writeFile } = require('fs');

for (let i = 0; i <= 1000; i++) {
  writeFile(
    './content/big.txt',
    `Hello world ${i}\n`,
    { flag: 'a' },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
}
