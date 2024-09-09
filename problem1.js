//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
function findLowestNumber(array) {
  let find = array[0]
  for(const num of array) {
     if(num < find) {
       find = num;
     }
  }
  return find
}
const lowestNumber = findLowestNumber(heights2)
console.log(lowestNumber)