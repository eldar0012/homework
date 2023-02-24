function time(number) { 
 let count = 0; 
 let result = ""; 
 if (number < 0) { 
 console.log("Ошибка, проверьте данные"); 
 } 
 for (let i = 0; i <= number; i++) { 
 if (Number.isInteger(number) == false) { 
 console.log("Ошибка, проверьте данные"); 
 break; 
 } 
 if (number >= 60) { 
 count++; 
 number -= 60; 
 result = `Это ${count} часов и ${number} минут`; 
 } 
 if (number < 60 || number == 0) { 
 result = `Это ${count} часов и ${number} минут`; 
 } 
 } 
 console.log(result); 
} 
time(200);