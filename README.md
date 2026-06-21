# Google Doc Grid Reader

Script Node.js/TypeScript que lê um Google Doc publicado contendo uma tabela de coordenadas (x, caractere, y) e renderiza o resultado como uma grade de caracteres no terminal — útil para revelar mensagens em "pixel art" escondidas em documentos.

## Como funciona

1. Busca o HTML de um Google Doc publicado (`/pub`) via `fetch`.
2. Faz o parse do HTML com `node-html-parser` e extrai as linhas da tabela.
3. Para cada linha, lê as colunas `x`, `char` e `y` e posiciona o caractere em uma grade 2D.
4. Imprime a grade invertendo o eixo Y (de baixo para cima), formando o desenho final.

## Requisitos

- Node.js 18+
- Dependências: `node-html-parser`

## Instalação

```bash
npm install
```

## Uso

```bash
npm run dev
```

> A URL do Google Doc está fixa no código (`get_docs()`). Para usar outro documento, troque a URL na variável `response`.

## Configuração da grade

O tamanho da grade (linhas x colunas) é definido manualmente em:

```ts
const grid = Array.from({ length: 8 }, () => Array(4).fill(0));
```

Ajuste `length` (altura) e `Array(4)` (largura) conforme o tamanho dos dados do documento de origem.
