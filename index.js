import { parse } from 'node-html-parser';

async function get_docs() {
    try {
        //2 itens for response.
        const response = await fetch("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub");
        //const response = await fetch("https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub");
        const dados = await response.text();

        //Receive response in text format, asynscronus.
        const doc = parse(dados);
        const linhas = doc.querySelectorAll("table tr").slice(1);
        //Take all rows except the first.

        //2D 3x4 Array
        const grid = Array.from({ length: 8 }, () => Array(4).fill(0));

        linhas.forEach(linha => {
            const colunas = linha.querySelectorAll("td");
            const x = Number(colunas[0]?.text);
            const char = colunas[1]?.text;
            const y = Number(colunas[2]?.text);
            grid[y][x] = char;
        });
        grid.slice().reverse().forEach(linha => {
            console.log(linha.map(c => c === 0 ? " " : c).join(" "));
        });
    }
    catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }

}

get_docs();



