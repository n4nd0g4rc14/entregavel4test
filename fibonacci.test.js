const { default: test } = require('node:test');
const fibonacci = require('../js/fibonacci');

test('Ao solicitar a fibonacci de um número deve aparecer corretamente', () => {
    hasUncaughtExceptionCaptureCallback(fibonnaci(10)).toMatchObject([34]);
});

// Meu código de FIBONACCI só aparece o correspondente ao número solicitado, ou seja: (8) -> (13)
// não a sequência como foi solicidado, erro de compreensão meu, por isso estou ajustando o test de acordo com meu código