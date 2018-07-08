// Add your doToElementsInArray() function here:
function changeCompletely(array, element, index){
 array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
};
function doToElementsInArray(array, callback){
  array.forEach(callback)
};


// Add your changeCompletely() function here:
