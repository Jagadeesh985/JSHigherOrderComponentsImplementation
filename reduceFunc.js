const numbersList = [1, 2, 3, 4, 5];

const callBackFunction = (accumalator = 0, element, index, array) =>
  accumalator + element;

const reduceFunc = (array, callBackFunction) => {
  let accumalator = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    accumalator = callBackFunction(accumalator, element, index, array);
  }
  return accumalator;
};

console.log(reduceFunc(numbersList, callBackFunction));
