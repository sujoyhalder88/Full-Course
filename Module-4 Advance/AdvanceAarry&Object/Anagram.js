/**
 * Problem – Given an array of strings. You need to print all anagrams together. For example –
	Input – {“data”, “atad”, “number”, “tada”, “adat”, “bernum”}
	Output – {“data”, “atad”, “tada”, “adat”, “number”, “bernum”}
 */

function anagram(str1, str2) {
    let n1 = str1.split("").sort().join("");
    let n2 = str2.split("").sort().join("");
    return n1 == n2;
}
console.log(anagram("data", "atad"));
