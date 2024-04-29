const numbersList = [1, 2, 3, 4, 5];

const callBackFunction = (element, index, array) =>
  console.log(`Element at index ${index} is ${element}`);

const forEachFunc = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callBackFunction(element, index, array);
  }
};

forEachFunc(numbersList, callBackFunction);
