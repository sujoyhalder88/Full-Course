/**
 * Problem – Given an array of strings. You need to print all anagrams together. For example –
	Input – {“data”, “atad”, “number”, “tada”, “adat”, “bernum”}
	Output – {“data”, “atad”, “tada”, “adat”, “number”, “bernum”}
 */

/*
function anagram(str1, str2) {
    let n1 = str1.split("").sort().join("");
    let n2 = str2.split("").sort().join("");
    return n1 == n2;
}
console.log(anagram("data", "atad"));
console.log(anagram("silent", "lisent"));
*/

//============================Anagram using Map object=============================

function anagram(str1, str2) {
  //  preper the fuquencei str1
  let mp = {};

  //if check str1 or str2 length is equal than retun true or retun false
  if (str1.length !== str2.length) return false;

  // if the current character is not present in the map, make entry with inital frequency 1
  // O(n)
  for (let i = 0; i < str1.length; i++) {
    if (!mp[str1[i]]) {
      mp[str1[i]] = 1;
    } else {
      // the character is already present in the map str1 increment
      mp[str1[i]] += 1;
    }
  }
  // checking str2 in the map
  for (let i = 0; i < str2.length; i++) {
    //O(n)
    if (!mp[str2[i]]) {
      // this is an extra unwanted character, as it is not present in my map
      return false;
    } else {
      // now as we have found the character, we reduce the frequency
      mp[str2[i]] -= 1;
      if (mp[str2[i]] == 0) delete mp[str2[i]];
    }
  }
  return Object.entries(mp).length == 0;
}
console.log(anagram("silent", "lisent"));
