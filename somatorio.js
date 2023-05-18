const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function recursiveQuestion(n, sum, p) {
  if (p > n) {
    console.log("A soma dos " + n + " números é igual a: " + sum);
    rl.close();
  } else {
    rl.question(`Digite o número ${p}: `, function(number) {
      sum += Number(number);
      recursiveQuestion(n, sum, p + 1);
    });
  }
}

rl.question("Quantos números serão somados? ", function(n) {
  recursiveQuestion(Number(n), 0, 1);
});



