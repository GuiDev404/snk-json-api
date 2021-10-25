const arrayOrEmptyString = (arr)=> {
  if(arr && !arr.length){
    return '';
  }
  
  if(arr && arr.length === 1){
    return arr[0];
  }

  return arr;
}

module.exports = arrayOrEmptyString;