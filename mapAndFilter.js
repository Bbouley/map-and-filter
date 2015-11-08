var arr1 = [10,15,20];
var myMatrix = [[1,0,1],
                [1,1,1],
                [0,1,0]];
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


function evenThenHalf(arr) {
    return arr.filter(function(val, i, arr) {
        return val%2 === 0;
    }).map(function(el, ind, array) {
        return el/2;
    })
}

function matrix(arr) {
    return arr.filter(function(val, i, arr) {
        return val.indexOf(0) !== -1;
    }).map(function(el, ind, arr2) {
        return el.filter(function(value, index, array) {
            return value !== 0;
        });
    }).map(function(el, ind, arr) {
        return el.map(function(val, ind, arr) {
            return val = 'true';
        })
    })
}

function firstEvolve(arr) {
    return arr.filter(function(val, i, arr) {
        return val.evolves === true;
    }).map(function(el, ind, array) {
        return el = el.type[0];
    })
}

function poisonType(arr) {
    return arr.filter(function(val, i, arr) {
        return val.type.indexOf('Poison') !== -1;
    }).map(function(el, ind, array) {
        return el = el.name;
    })
}

function fairyEvolve(arr) {
    return arr.filter(function(val, i, arr) {
        return val.type.indexOf('Fairy') !== -1;
    }).map(function(el, ind, array) {
        return el = el.nextEvolutions;
    })
}

function formerEvolutionsID(arr) {
    return arr.map(function(el, ind, array) {
        return el = el.formerEvolutions[el.formerEvolutions.length-1].id;
    })
}

// console.log(evenThenHalf(arr1));
// console.log(matrix(myMatrix));
// console.log(firstEvolve(wesFavoritePokemon));
// console.log(poisonType(wesFavoritePokemon));
// console.log(fairyEvolve(wesFavoritePokemon));
console.log(formerEvolutionsID(wesFavoritePokemon));
