module.exports = function check(str, bracketsConfig) {
  // your solution 
 let stringStr = str;
  const brackets = [];
  bracketsConfig.forEach(bracket => {
    brackets.push(bracket.join(''))
  });
  for (let i = 0; i < brackets.length;) {
    if (stringStr.includes(brackets[i])) {
      stringStr = stringStr.replace(brackets[i], '');
      i = 0;
    } else {
      i++;
    }
  }
  return stringStr ? false : true;
}