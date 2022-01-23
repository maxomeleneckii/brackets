module.exports = function check(str, bracketsConfig) {
  let res = str.split('');
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (res[i] === bracketsConfig[j][0] && res[i + 1] === bracketsConfig[j][1]) {
        res.splice([i], 2);
        i = -1;
        continue;
      }
    }
  }
  if (res.length === 0) {
    return true;
  } else {
    return false;
  }
}