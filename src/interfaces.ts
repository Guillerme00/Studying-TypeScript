class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor:number, destino:Conta) => boolean|void;
    taxa:number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destino: Conta) {
        destino.saldo += valor;
        destino.saldo -= this.taxa;
    };
    taxa: number = 5;

}