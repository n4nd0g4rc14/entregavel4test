const readline = require('readline');

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(n) {
  const fib = fibonacci(parseInt(n));
  console.log(`O ${n} na Fibonacci é: ${fib}`);
  rl.close();
});
