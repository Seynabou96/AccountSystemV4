export class Transaction {

    public typeTransac : string;
    public montantTtransac : number;
    public motifTransac : string;

    constructor(type : string, montant : number, motif : string) {
        this.typeTransac = type;
        this.montantTtransac = montant;
        this.motifTransac = motif;
    }

    getType(){
        return this.typeTransac;
    }

    getMontant(){
        return this.montantTtransac;
    }

    getMotif(){
        return this.motifTransac;
    }
    setText(){
        return `${this.getMontant()} a été ${this.getType() === 'debit' ? 'retiré' : 'déposé'} suite a ${this.getMotif()}`;
    }
}

