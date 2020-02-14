'use strict'

export class todo {
    constructor() {
        this.numero = 0;
    }

    test() {
        console.log('test');
    }

    get getNumero(){
        return this.numero;
    }
    
    static otro(){
        console.log('sucker');
    }
}