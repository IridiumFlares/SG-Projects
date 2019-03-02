function sumOfRange(){
  let range = [17, 42, 311, 5, 9, 10, 28, 7, 6];
  let sum = 0;
  for (let i = 0; i < range.length;  i++) {
    sum += range[i];

  }
  console.log("The sum  of "  + range + " is "  + sum);
}

function findMax(array)  {
  let currentMax = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > currentMax){
      currentMax = array[i]
    }
  }
  console.log("The maximum value for an element within " + array + " is " + currentMax);
}
