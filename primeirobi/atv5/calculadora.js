const valorConta = 400, percentualGorjeta = 22;

const gorjeta = (valorConta * percentualGorjeta) / 100;

const valorTotal = gorjeta + valorConta;

console.log("Valor: " + valorConta + ", Gorjeta: " + gorjeta + ", Total: " + valorTotal);