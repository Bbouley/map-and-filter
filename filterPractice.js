var arr1 = [10,15,20];
var arr2 = ['return', 'phrases', 'with one word'];
var arr3 = ['racecar', 'amalgam', 'oligopoly', 'zoom', 'testereng'];
var myMatrix = [[1,0,1],
                [1,1,1],
                [0,1,1]];
var wesFavoritePokemon = [{
                            id: '38413e28-83ec-11e5-8bcf-feff819cdc9f',
                            name: 'Crobat',
                            type: ['Poison', 'Flying'],
                            evolves: false,
                            formerEvolutions: [{
                                                 id: '38414792-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Golbat'
                                               },
                                               {
                                                 id: '3841490e-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Zubat'
                                               }]
                          },
                          {
                            id: '384141f2-83ec-11e5-8bcf-feff819cdc9f',
                            name: 'Gengar',
                            type: ['Ghost', 'Poison'],
                            evolves: true,
                            formerEvolutions: [{
                                                 id: '38414fa8-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Haunter'
                                               },
                                               {
                                                 id: '38415174-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Ghastly'
                                               }],
                            nextEvolutions: [{
                                               id: '384152e6-83ec-11e5-8bcf-feff819cdc9f',
                                               name: 'Mega Gengar'
                                             }]
                          },
                          {
                            id: '3841444a-83ec-11e5-8bcf-feff819cdc9f',
                            name: 'Jigglypuff',
                            type: ['Normal', 'Fairy'],
                            evolves: true,
                            formerEvolutions: [{
                                                 id: 'fda25954-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Igglybuff'
                                               }],
                            nextEvolutions: [{
                                               id: 'fda25b2a-83ec-11e5-8bcf-feff819cdc9f',
                                               name: 'Wigglytuff'
                                             }]
                          },
                          {
                            id: '3841460c-83ec-11e5-8bcf-feff819cdc9f',
                            name: 'Clefairy',
                            type: ['Fairy'],
                            evolves: true,
                            formerEvolutions: [{
                                                 id: 'fda262be-83ec-11e5-8bcf-feff819cdc9f',
                                                 name: 'Cleffa'
                                               }],
                            nextEvolutions: [{
                                               id: 'fda2639a-83ec-11e5-8bcf-feff819cdc9f',
                                               name: 'Clefable'
                                             }]
                          }]

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

function only0(arr) {
    return arr.filter(function(val, i, arr) {
        return val.indexOf(0) !== -1;
    })
}

function wesID(arr) {
    return arr.filter(function(val, i, arr) {
        return val.id === '3841444a-83ec-11e5-8bcf-feff819cdc9f';
    })
}

function poisonPokemon(arr) {
    return arr.filter(function(val, i, arr) {
        return val.type.indexOf('Poison') !== -1;
    })
}

function doesntEvolve(arr) {
    return arr.filter(function(val, i, arr) {
        return val.evolves === false;
    })
}

function formerEvolutions(arr) {
    return arr.filter(function(val, i, arr) {
        return val.formerEvolutions.length > 1;
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
console.log(sameVowels(arr3));
console.log(only0(myMatrix));
console.log(wesID(wesFavoritePokemon));
console.log(poisonPokemon(wesFavoritePokemon));
console.log(doesntEvolve(wesFavoritePokemon));
console.log(formerEvolutions(wesFavoritePokemon));
