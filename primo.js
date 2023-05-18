function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro: ', (num) => {
  if (isPrime(parseInt(num))) {
    console.log(`${num} é primo.`);
  } else {
    console.log(`${num} não é primo.`);
  }
  readline.close();
});
