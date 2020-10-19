let num = 266219; 

let twoNum = num.toString()[0];
for (let i = 1; i<num.toString().length; i++){
    twoNum *= num.toString()[i];
}

alert(twoNum);

alert((twoNum ** 3).toString().substring(0,2));
