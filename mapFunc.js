const numbersList = [1, 2, 3, 4, 5];

const callBackFunction = (element, index, array) => element * index;

const mapFunc = (numbersList, callBackFunction) => {
  let output = [];
  for (let i = 0; i < numbersList.length; i++) {
    output.push(callBackFunction(numbersList[i], i, numbersList));
  }
  return output;
};

console.log(mapFunc(numbersList, callBackFunction));
