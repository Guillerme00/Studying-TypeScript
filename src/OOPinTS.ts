
class ContaBanco {
    protected saldo: number;
    numeroConta: number;
    constructor(saldo: number, numeroConta: number){
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    deposito(deposito:number) {
        this.saldo += deposito
        console.log (`Deposito do valor ${deposito} feito com sucesso!`)
    }
}
class ContaFisica extends ContaBanco {

}

const contaGui = new ContaFisica(0, 123321)
console.log(contaGui);
console.log(contaGui.getSaldo());
contaGui.deposito(500);
console.log(contaGui.getSaldo())