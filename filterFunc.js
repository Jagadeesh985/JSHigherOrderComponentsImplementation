const numbersList = [1, 2, 3, 4, 5];

const callBackFunction = (element, index, array) => {
  if (element % 2 == 0) {
    return element;
  }
};

const filterFunc = (array, callBackFunction) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const filteredValue = callBackFunction(element, index, array);
    if (filteredValue !== undefined) {
      output.push(filteredValue);
    }
  }
  return output;
};

console.log(filterFunc(numbersList, callBackFunction));
