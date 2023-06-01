times = [ [ 'Nome do Time', 'Total de Pontos', 'Jogo 1 ', 'Jogo 2' ],
[ 'Santos', 100, 50, 50 ],
['Palmeiras', 50, 25, 25 ],
['Flamengo', 30, 15, 15 ],
['São Paulo', 20, 10, 10],
];

times.splice (3,0,['Fluminense', 20, 5, 15]);
console.table (times);