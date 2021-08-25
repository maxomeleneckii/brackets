module.exports = function check(str, bracketsConfig) {
  let brackets = str.split("");
  for (let i = 0; i < brackets.length; i++) {
    for (let x = 0; x < bracketsConfig.length; x++) {
      if (brackets[i] === bracketsConfig[x][0] && brackets[i + 1] === bracketsConfig[x][1]) {
        brackets.splice(i, 2);
        i = -1;
        continue;
      }
    }
  }
  if (brackets.length === 0) {
    return true;
  } else {
    return false;
  }
}