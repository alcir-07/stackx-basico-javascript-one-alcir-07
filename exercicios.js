// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return a+b;
  }
let valorsoma = soma(10, 5);
console.log(valorsoma);
/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return a * b;
  }
let valormultiplicacao = multiplicacao(10, 2);
console.log(valormultiplicacao);

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
  return a / b;
  }
let valordivisao = divisao(30, 2);
console.log(valordivisao);

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return a - b;
  }
let valorsubtracao = subtracao(20, 3);
console.log(valorsubtracao);

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return a % b;
  }
let valormodulo = modulo(10, 3);
console.log(valormodulo);

// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */


function strConcat(a, b) {
  return `${a} ${b}`;
}

// Exemplo de uso
console.log(strConcat("Hello","world"));


//---------------------------------------

function max(a, b) {
  return Math.max(a, b);
}
let valorMax = max(5, 3);
console.log(valorMax);

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
  if (numero > 10) {
    return "Maior que 10";
  } else if (numero == 10) {
    return "Igual a 10";
  } else {
    return "Menor que 10";
  }
}
let numero = retornaNumero(20);
console.log(numero);
  

// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
 if (num > 0){
  return true
} else {
return false
}
}


module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
