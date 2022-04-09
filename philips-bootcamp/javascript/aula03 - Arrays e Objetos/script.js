let array = ['string', 1, true, 2, 'Primavera'];
console.log(array);

let array2 = ['string', 1, true, ['array']];
console.log(array2);
console.log(0);

//forEach
array.forEach(function(item, index){console.log(item, index)});

//push
array.push('novo item');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item no inicio');
console.log(array);

//indexOf
console.log(array.indexOf(true));

//splice
array.splice(0, 3);
console.log(array);

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno:'objeto interno'}};

console.log(object.boolean);

//desestruturação do objeto
var string = object.string;
console.log(string);

var arrayI = object.array;
console.log(arrayI);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)