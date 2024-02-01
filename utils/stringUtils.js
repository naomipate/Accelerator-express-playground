// check if all chars in a string are uppercase
// input type => some String
// output type => boolean
function checkIsUpperCase(str) {
  // make sure upppercase

  if (/\s/.test(str)) {
    return false;
  }

  if (str.length === 0) {
    return false;
  }

  return /[A-Z]/g.test(str);
}

module.exports = checkIsUpperCase;
