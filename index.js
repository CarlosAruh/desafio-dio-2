const hero = 'Zyglephornix Nebuloflux';
let win = 10;
let loss = 20;

function calc(win, loss) {
  if (win > loss) {
    let result = win - loss;
    return result;
  } else {
    return 'Pontuação não alcançada para rankear.';
  }
}

let charRank;
let result;

if (win > loss) {
  result = calc(win, loss);

  if (result <= 10) {
    charRank = 'no nível Ferro';
  } else if (result >= 11 && result <= 20) {
    charRank = 'no nível Bronze';
  } else if (result >= 21 && result <= 50) {
    charRank = 'no nível Prata';
  } else if (result >= 51 && result <= 80) {
    charRank = 'no nível Ouro';
  } else if (result >= 81 && result <= 90) {
    charRank = 'no nível Diamante';
  } else if (result >= 91 && result <= 100) {
    charRank = 'no nível Lendário';
  } else {
    charRank = 'no nível Radiante';
  }
} else {
  charRank = 'negativo, acumule mais vitórias que derrotas';
}

console.log(
  `O Herói ${hero} tem um saldo de ${win - loss} vitórias e está ${charRank}`
);
