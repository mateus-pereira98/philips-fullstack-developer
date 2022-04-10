class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; 
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
    //metodo para sacar
    sacar(valor) {
        //teste para saber se o valor é maior do que o saldo.
        if(valor > this._saldo){
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    //metodo para depositar
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
     
    }
}

class ContaUniversitária extends ContaBancaria {
    constructor(agencia, numero ) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;
    }
}