module.exports = function multiply(first, second) {
  /*используем принцип умножения в столбик, в связи с тем, что умножение начинается с конца, перевернем для удобства число*/
  let result = [];
  let arrOfFirst = first.split('').reverse();
  let arrofSecond = second.split('').reverse();
 

  for (let i = 0; i < arrOfFirst.length; i++) {
    for (let j = 0; j < arrofSecond.length; j++) {
        let composition = arrOfFirst[i] * arrofSecond[j];

        if(result[i + j]) {
          result[i + j] = result[i + j] + composition;
        } else {
        result[i + j] = composition;
        }
    }
  }

  /* result[i] должна остаться одна цифра, десятки переносим в i+1 */
  
  for (let i = 0; i < result.length; i++) {
    let numeral = result[i] % 10;
    let up = Math.floor(result[i] / 10);
    result[i] = numeral;

    if(result[i + 1]) {
      result[i + 1] += up;
    } else {
      if(up != 0) {
        result[i + 1] = up
      }
    }
  }

 return result.reverse().join('');
 
}

