import { IObserver } from "../interfaces/IObserver";
import { Caisses } from "./caisse";

export class ViewListClient implements IObserver {

    private tables: HTMLTableElement;
    private tr: HTMLTableRowElement;
    private tdClient: HTMLTableCellElement;
    private tdClDebit: HTMLTableCellElement;
    private tdClCredit: HTMLTableCellElement;

    constructor() {
        this.tables = document.querySelector('.table-liste-client');
        this.tr = document.createElement('tr');
        this.tdClCredit = document.createElement('td');
        this.tdClDebit = document.createElement('td');
        this.tdClient = document.createElement('td');
        this.tr.append(this.tdClient, this.tdClDebit, this.tdClCredit);
        this.tables.append(this.tr);
    }

    update(caisse: Caisses) {
        let transactions = caisse.getTransac();
        transactions.forEach(transaction => {

            if (transaction.getType() === 'debit') {
                this.tdClient.innerText = transaction.getNomClient();
                this.tdClCredit.innerText = '0';
                this.tdClDebit.innerText = transaction.getMontant().toString();
            }
            else {
                this.tdClient.innerText = transaction.client;
                this.tdClCredit.innerText = transaction.getMontant().toString();
                this.tdClDebit.innerText = '0';
            }
        });

    }

}