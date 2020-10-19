'use strict'
// создал массив с 3 значными числами
let arr = ['112', '841', '341', '890', '411', '778', '791', '101'];
// вывод только 4 и 2
arr.forEach(element => {
  if (element[0] === '2' || element[0] === '4') {
    console.log(element);
  }
});
// использую продолжить через цикл
nextNum: for (let i = 2; i < 100; i++) {
    for (let k = 2; k < i; k++) {
         if (i % k === 0) {
         continue nextNum;
     }    
  }
  console.log(i + ': делитель этого числа 1 и ' + i);
}