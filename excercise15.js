function groupAnimals(animals){
    var out = []
    var result = []
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i<alphabet.length; i++)
        out[i] = []
    // console.log(out)
    for ( var i = 0; i<animals.length; i++){
        for ( var j = 0; j<alphabet.length; j++){
            if (animals[i][0] === alphabet[j]){
                out[j].push(animals[i])
            }
        }
    }
    for (var i = 0; i<out.length; i++){
        if (out[i].length !==0){
            // console.log(out[i])
            // console.log(out[i])
            result.push(out[i])
        }
        
    }
    return result
    // return(result)
    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

function groupAnimalsCara2(animals){
    var out = []
    // var result = []
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    // for (i = 0; i<alphabet.length; i++)
    //     out[i] = []
    // console.log(out)
    for ( var i = 0; i<alphabet.length; i++){
        // var counter = 0
        var kelompok = []
        for ( var j = 0; j<animals.length; j++){
            if (animals[j][0] === alphabet[i]){
                kelompok.push(animals[j])
            }
        }
        if (kelompok.length !== 0){
            out.push(kelompok)
        }
    }
    // for (var i = 0; i<out.length; i++){
    //     if (out[i].length !==0){
    //         // console.log(out[i])
    //         // console.log(out[i])
    //         result.push(out[i])
    //     }
        
    // }
    return out
    // return(result)
    
}

console.log(groupAnimalsCara2(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimalsCara2(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));

