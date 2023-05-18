const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const n = await new Promise((resolve) => {
    rl.question('Digite o tamanho do conjunto: ', (n) => {
      resolve(parseInt(n));
    });
  });

  const conjunto = [];
  for (let i = 0; i < n; i++) {
    const value = await new Promise((resolve) => {
      rl.question(`Digite o valor ${i+1}: `, (value) => {
        resolve(parseFloat(value));
      });
    });
    conjunto.push(value);
  }

  let count = 0;
  for (const value of conjunto) {
    if (Number.isInteger(value)) {
      count++;
    }
  }
  console.log(`O conjunto possui ${count} valores inteiros.`);
  
  rl.close();
})();
