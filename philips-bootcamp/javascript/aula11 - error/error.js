function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (error) {
		if (error instanceof RangeError) {
			console.log('RangeError!');
			console.log(error.stack);
		} else if (error instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(error.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(error.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3, 4, 5], 5));