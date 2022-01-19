import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { Caisses } from "./caisse";
import { Transaction } from "./transaction";

export class listeTransac implements IObserver {
    private ul: HTMLUListElement;
    // private liHtml: HTMLLIElement;
    // private headHtml: HTMLHeadElement;
    // private paraHtml: HTMLParagraphElement;


    constructor() {
        this.ul = document.querySelector('.listeOrdonnee')
        //macaisse.subscribe(this)
        // this.liHtml = document.createElement('li');
        // this.headHtml = document.createElement('h4')
        // this.paraHtml = document.createElement('p')

        // let transac = macaisse.getTransac()
        // transac.forEach(trs => {
        //     //if()
        //     console.log('entrée');
        //     this.liHtml.className = trs.getType()
        //     this.headHtml.innerText = `${trs.getType() === 'debit' ? 'Debit' : 'Credit'}`;
        //     this.paraHtml.innerHTML = trs.setText()
        // })
        // ul.append(this.liHtml)
        // this.liHtml.append(this.headHtml)
        // this.liHtml.append(this.paraHtml)
    }

    update(caisse: Caisses) {
        let transac = caisse.getTransac()
        let liHtml = document.createElement('li');
        let headHtml = document.createElement('h4');
        let paraHtml = document.createElement('p');
        transac.forEach(trsc => {
            liHtml.className = trsc.getType()
            headHtml.innerText = `${trsc.getType() === 'debit' ? 'Debit' : 'Credit'}`;
            paraHtml.innerHTML = trsc.setText()
        })
        this.ul.append(liHtml)
        liHtml.append(headHtml)
        liHtml.append(paraHtml)

    }
}