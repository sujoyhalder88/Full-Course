/**
 *  Print frequency of element in the string
 * 
	Frequency – The frequency of an element in the string is defined as the number of times that element is present in the string.
	
	Problem – Given a string and a character as input. You need to print the frequency of the character in a given string.

	For example –
	Input – str = “unacademy”, c = ‘a’
	Output – 2
 */

function printFrequencyElement(str, char) {
    let mp = {};
    for (let i = 0; i < str.length; i++) {
        if (!mp[str[i]]) {
            mp[str[i]] = 1;
        } else {
            mp[str[i]] += 1;
        }
    }
    for (let key in mp) {
        if (key === char) mp = mp[key];
    }
    return mp;
}
console.log(printFrequencyElement("unacademy", "a"));
