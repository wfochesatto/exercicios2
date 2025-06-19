
//1. Validação de Datas
/*
function ehDataValida(dia, mes, ano) {

    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }

    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0))) {
        if (dia <= 29) return true;
        else return false;
    }
    return dia <= diasPorMes[mes - 1];
}

console.log(ehDataValida(29, 2, 2020)); 
console.log(ehDataValida(29, 2, 2021)); 
*/

//2. Jogo de Adivinhação
/*
const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpite = 0;

console.log("Jogo de Adivinhacao: Tente acertar o numero entre 1 e 100!");

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Digite seu palpite: "));
    tentativas++;

    if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabens! Voce acertou em ${tentativas} tentativa(s)!`);
    }
}
*/

//3. Palavras Únicas
/*
const frase = "ola ola mundo mundo teste oi";
const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let encontrada = false;

    for (let j = 0; j < palavras.length; j++) {
        if (palavras[i] === palavras[j] && i !== j) {
            encontrada = true;
            break;
        }
    }

    if (!encontrada) {
        unicas.push(palavras[i]);
    }
}

console.log("Palavras unicas:", unicas);
*/

//4. Fatorial Recursivo
/*
function fatorial(n) {
    if (n < 0) {
        throw new Error("Numero negativo nao possui fatorial.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5));
*/

//5. Debounce
/*
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function salvarBusca(termo) {
    console.log("Buscando por:", termo);
}

const buscaDebounced = debounce(salvarBusca, 500);
*/

//6. Memoization
/*
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Resultado do cache para:", key);
            return cache.get(key);
        }

        const resultado = fn(...args);
        cache.set(key, resultado);
        return resultado;
    };
}

function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); 
console.log(fatorialMemo(5)); 
console.log(fatorialMemo(6)); 
*/

//7. Mapeamento e Ordenação
/*
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() 
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome); 
}

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 950 },
    { nome: "Webcam", preco: 250 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);
*/

//8. Agrupamento por Propriedade
/*
function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (acumulador[cliente]) {
            acumulador[cliente] += total;
        } else {
            acumulador[cliente] = total;
        }

        return acumulador;
    }, {});
}
const vendas = [
    { cliente: "Ana", total: 150 },
    { cliente: "Joao", total: 200 },
    { cliente: "Ana", total: 100 },
    { cliente: "Joao", total: 50 },
    { cliente: "Carlos", total: 300 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);
*/

//9. Conversão Entre Formatos
/*
function paresParaObjeto(pares) {
    const obj = {};

    for (let i = 0; i < pares.length; i++) {
        const [chave, valor] = pares[i];
        obj[chave] = valor;
    }

    return obj;
}

function objetoParaPares(obj) {
    const pares = [];

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }

    return pares;
}

const pares = [["nome", "Ana"], ["idade", 25], ["cidade", "SP"]];

const obj = paresParaObjeto(pares);
console.log(obj);

const deVoltaParaPares = objetoParaPares(obj);
console.log(deVoltaParaPares);
*/