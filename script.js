let lang = prompt ("Какая будет раскладка?");
if (lang === "ru") {
    alert (["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье."])
} 
else if (lang === "en") {
    alert (["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday."]) 
}
else {
    alert ("Такой нет.")
}


let langv = "ru";

switch (langv) {
    case "ru":
        alert(["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье."]);
  break;


    case "en":
        alert(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday."]);
        
  break;
}



let lang; 
   let ru =  ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье."];
   let en = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday."];
   lang = en;
alert(lang);

let login = prompt ("?");
let age =(login == "Артём") ? 
(alert ("директор")) : (login == "Максим") ?
 (alert("преподаватель")): alert( "студент",); 