var arr1 = [10,15,20];
var arr2 = ['return', 'phrases', 'with one word'];
var arr3 = ['racecar', 'amalgam', 'oligopoly', 'zoom', 'testereng'];

function evenNums(arr) {
    return arr.filter(function(val, i, arr) {
        return val%2 === 0;
    })
}

function oneWord(arr) {
    return arr.filter(function(val, i, arr) {
        return val.indexOf(' ') === -1;
    })
}


function sameVowels(arr) {
    return arr.filter(function(val, i, arr) {
        return checkVowels(val) === val;
    })
}

// *** helper functions *** //
function checkVowels(string) {
    var str = string.replace(/[^aeiou]/g, '');
    var arr = str.split('');
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return string;
}

console.log(evenNums(arr1));
console.log(oneWord(arr2));
console.log(sameVowels(arr3))
