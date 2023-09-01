function test(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const arrayCollection = test(collection);

    for (let arr = 0; arr < arrayCollection.length; arr++) {
        callback(arrayCollection[arr]);
    }
    return collection;
}

function myMap(collection, callback) {
    const arrayCollection = test(collection);
    const newArray = [];

    for (let arr = 0; arr < arrayCollection.length; arr++) {
        newArray.push(callback(arrayCollection[arr]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let arrayCollection = test(collection);

    if (!acc) {
        acc = arrayCollection[0];
        arrayCollection = arrayCollection.slice(1);
    }

    for (let arr = 0; arr < arrayCollection.length; arr++) {
        acc = callback(acc, arrayCollection[arr], arrayCollection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const arrayCollection = test(collection);

    for (let arr = 0; arr < arrayCollection.length; arr++) {
        if (predicate(arrayCollection[arr])) {
            return arrayCollection[arr];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const arrayCollection = test(collection);
    const truthArray = [];

    for (let arr = 0; arr < arrayCollection.length; arr++) {
        if (predicate(arrayCollection[arr])) {
            truthArray.push(arrayCollection[arr]);
        }
    }
    return truthArray;
}

function mySize(collection) {
    const arrayCollection = test(collection);
    let total = 0;

    for (let i = 0; i < arrayCollection.length; i++) {
        total++;
    }
    return total;
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    }
    return array[0];
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    }
    return array[array.length-1];
}

function myKeys(object) {
    let keyArray = [];

    for (let key in object) {
        keyArray.push(key);
    }
    return keyArray;
}

function myValues(object) {
    let valueArray = [];

    for (let key in object) {
        valueArray.push(object[key]);
    }
    return valueArray;
}