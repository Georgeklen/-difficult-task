



    prompt ("?")
  function test(str) {
    if (typeof str !== 'string') {
        return ('аргумент не строка');
      
    }

   return str.length > 30 ? str.slice(0, 30) + '... \n' : str ;
  }
  console.log(test())
 