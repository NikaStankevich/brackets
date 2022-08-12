module.exports = function check(str, bracketsConfig) {
  let strLength = str.length;
  const OPEN = 0;
  const CLOSE = 1;
  const BRACKETS_ARR = bracketsConfig;

  if (strLength % 2 !== 0) {
    return false;
  }
  
  function isOpen(brkt) {
    let result = false;

    BRACKETS_ARR.forEach(el => {
      if (brkt === el[OPEN]) {
        result = true;
      }
    });

    return result;
  }

  function isSame(obrkt, cbrkt) {
    let result = false;
    BRACKETS_ARR.forEach(el => {
      if (obrkt === el[OPEN] && cbrkt === el[CLOSE]) {
        result = true;
      }
    });

    return result;
  }

  let stack = [];

  for (let i = 0; i < strLength; i++) {
    let braket = str[i];
    
    if (isOpen(braket)) {
      stack.push(braket);
    } else {
      let lastBraket = stack.pop();
      if (!isSame(lastBraket, braket)){
        return false;
      }
    }
  }
  
  return true;
}
