const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mdc(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mdc(b, a % b);
  }
}

rl.question("Digite o primeiro número: ", (numero1) => {
  rl.question("Digite o segundo número: ", (numero2) => {
    let md = mdc(numero1, numero2);
    console.log("O mdc de " + numero1 + " e " + numero2 + " é " + md + ".");
    rl.close();
  });
});
