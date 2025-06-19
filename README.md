# exercicios2
Lista de exercicios numero 2 +praTi

# Exercícios de JavaScript

Este repositório contém 9 exercícios de JavaScript, cada um resolvendo um problema comum de lógica ou manipulação de dados.

---

## Pré-requisitos

- Node.js instalado (https://nodejs.org/)
- Editor de texto (como VS Code)

Para exercícios que usam entrada do usuário via terminal (`prompt-sync`), instale a dependência:

npm install prompt-sync

---
# Estrutura dos Arquivos

Os exercícios estão organizados em um único arquivo contendo todos os códigos comentados entre /* ... */.

Para executar um exercício específico, basta remover os comentários (/* e */) que envolvem o código desse exercício e rodar o arquivo com Node.js.

Por exemplo, para executar o exercício 1, remova os comentários do bloco do exercício 1 e execute:

node exercicios2.js

---

# Exercícios

1. Validação de Datas
Verifica se uma data (dia, mes, ano) e valida, considerando anos bissextos.

2. Jogo de Adivinhacao
Gera um numero aleatorio de 1 a 100 e o usuário deve adivinhar. Usa prompt-sync.

3. Palavras Unicas
Extrai palavras que aparecem apenas uma vez em uma string.

4. Fatorial Recursivo
Calcula o fatorial de um numero de forma recursiva, tratando entradas invalidas.

5. Debounce
Implementa a função debounce: adia a execucao de uma funcao ate um tempo apos a ultima chamada.

6. Memoization
Cria uma funcao que armazena resultados anteriores para otimizar chamadas repetidas.

7. Mapeamento e Ordenação
Recebe um array de produtos e retorna apenas os nomes, ordenados pelo preço crescente.

8. Agrupamento por Propriedade
Agrupa vendas por cliente e soma os totais usando reduce.

9. Conversao Entre Formatos
Contem duas funcoes:

paresParaObjeto: transforma array de pares em objeto.

objetoParaPares: transforma objeto em array de pares.
