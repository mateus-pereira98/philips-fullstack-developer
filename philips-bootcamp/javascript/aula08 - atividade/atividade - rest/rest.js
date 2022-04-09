function confereTamanho(...args){
    console.log(args.length);
}
confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3
/*  --------------------------------------- */
function arr(...array) {
    let aux;
    for(let i = 0; i < array.length; i++) {
        for(let c = 0; c < array.length; c++) {
            if(array[i] < array[c]) {
            aux = array[i];
            array[i] = array[c];
            array[c] = aux;  
            }
        }
    }
    console.log(array);
}
arr(1, 100, 20, 40, 50, 2, 3, 54, 1000, 90, 7);