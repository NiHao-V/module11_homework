function countArrayElements(array) {
  let evenNum = 0;
  let oddNum = 0;
  let zero = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      if (array[i] % 2 === 0 && array[i] !== 0) {
        evenNum += 1;
      }

      if (array[i] % 2 !== 0) {
        oddNum += 1;
      }

      if (array[i] === 0) {
        zero += 1;
      }
    }
  }

  console.log(`четных элементов - ${evenNum}`);
  console.log(`нечетных элементов - ${oddNum}`);
  console.log(`нулей - ${zero}`);
}

const array = [5, 0, 2, 0, NaN, 'v', 3, '52', 0];
countArrayElements(array);
