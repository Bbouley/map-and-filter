var array1 = [10,20,30];
var array2 = ['average', 'exceptional', 'amazing'];
var myMatrix = [[1,2,3],
                [4,5,6],
                [7,8,9]];

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

function divide10(arr) {
    return arr.map(function(curr, i, arr) {
        return curr/10;
    });
}

function moveForwardOne(arr) {
    return arr.map(function(curr, i, arr) {
        return arr[i-1] || arr[arr.length-1];
    });
}

function returnVowels(arr) {
    return arr.map(function(curr, i, arr) {
        return curr.replace(/[^aeiou]/g, '')
    })
}

function doubleMatrix(arr) {
    return arr.map(function(curr, i, arr) {
        return curr.map(function(curr, i, arr) {
            return curr*2;
        })
    })
}

function returnNames(arr) {
    return arr.map(function(curr, i, arr) {
        return curr.name;
    })
}

function returnFirstType(arr) {
    return arr.map(function(curr, i, arr) {
        return curr.type[0];
    })
}

function returnObject(arr) {
    var output = {};
    arr.map(function(curr, i, arr) {
        return curr.nextEvolutions ? output[curr.name] = curr.nextEvolutions : output[curr.name] = [];
    });
    return output;
}

console.log(divide10(array1));
console.log(moveForwardOne(array1));
console.log(returnVowels(array2));
console.log(returnNames(wesFavoritePokemon));
console.log(returnFirstType(wesFavoritePokemon));
console.log(returnObject(wesFavoritePokemon));
