module.exports = function check(str, bracketsConfig) {
  let brackes = {};
  for (let item of bracketsConfig) {
    brackes[item[0]] = item[1];
  }

  let sqware = [];
  for (let i = 0; i < str.length; i++) {
    let lastItem = sqware[sqware.length-1];
    let current = str[i];
    
    if (current in brackes) {
      (current == brackes[current]) && (current == lastItem) ? 
      sqware.pop() : sqware.push(current);
    } else {
      if (sqware.length === 0) {
        return false;
      }
      brackes[lastItem] == current ? sqware.pop() : false;
    }
  } 
    return sqware.length === 0;
}
