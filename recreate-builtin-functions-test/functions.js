// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA
function includes(item, array){
    for(i = 0; i < array.length; i++){
        if(array[i] === item){
            return true;
        }
    }
    return false;
}

function indexOf(item, array){
    for(i = 0; i < array.length; i++){
        if(array[i] === item){
            return i;
        }
    }

    return -1;
}

function reverse(array){
    let newArray = [];

    for(i = array.length - 1; i > -1; i--){
        newArray.push(array[i]);
    }

    return newArray;
}

function slice(start, stop, array){
    let newArray = [];

    for(i = start; i < stop; i++){
        newArray.push(array[i]);
    }

    return newArray;
}

function concat(array1, array2){
    for(i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }

    return array1;
}

function join(sep, array){
    let newStr = "";
    for(i = 0; i < array.length; i++){
        newStr += array[i];
        if(!(i === array.length - 1)){
            newStr += sep;
        }
    }
    return newStr;
}

function max(array){
    let maxArray = array[0];

    for(i = 0; i < array.length; i++){
        if(array[i] > maxArray){
            maxArray = array[i];
        }
    }

    return maxArray;
}