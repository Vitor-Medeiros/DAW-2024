const arraValor = [1, 2, 3, 4, 5, 6];

const arrayObjetos = [
    {valor1: 1, valor2: '13/11/2024',valor3: 'três'},
    {valor1: 1, valor2: '13/11/2024',valor3: 'três'},
]

console.table(arrayObjetos);

arrayObjetos.push({valor1: 1, valor2: '13/11/2024',valor3: 'quarto'});

console.table(arrayObjetos);