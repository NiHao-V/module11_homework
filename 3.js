// Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
//   которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//   Выведите в консоль результат.


function getNumber(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

const addNum = getNumber(4);
const result = addNum(6);
console.log(result);
