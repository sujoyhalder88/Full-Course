/**
 *  First non-repeating character
	Non-repeating – A character is known as a non-repeating character when its frequency is unit in a given string.
	Problem – Given a string. You need to print the first non-repeating character. 

	For example –
	Input – str = “unacademy”
	Output – u

 */

function nonRepeatedCharacture(str) {
  let mp = {};
  for (let i = 0; i < str.length; i++) {
    if (!mp[str[i]]) {
      mp[str[i]] = 1;
    } else {
      mp[str[i]] += 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (mp[str[i]] == 1) {
      return str[i];
    }
  }
  return mp;
}
console.log(nonRepeatedCharacture("unacademy"));
