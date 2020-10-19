let asd =      123456789123456789012345678901234567890909090;
function test(str) {
  if (typeof str!== 'string') {
      return ('аргумент не строка');
    
  } else {
    console.log('аргумент строка')
  }

 return str.length > 30 ? str.slice(0, 30) + '... \n' : str ;
}
console.log(test(asd).trim())
