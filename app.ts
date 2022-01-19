import { Caisses } from "./src/classes/caisse"
import { listeTransac } from "./src/classes/listetransac"
import { Transaction } from "./src/classes/transaction"
import { IObserver } from "./src/interfaces/IObserver"



const form = document.querySelector('#form') as HTMLFormElement
const typeOp = document.querySelector('#typeOperation') as HTMLInputElement
const montant = document.querySelector('#montant') as HTMLInputElement
const motif = document.querySelector('#motif') as HTMLInputElement
// let localStore = window.localStorage.account;
// let listForm : object [];

//let maCaisse = new Caisses(100000, []);
let caisse= new Caisses(10000,[])

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let laTransaction = new Transaction(typeOp.value, montant.valueAsNumber, motif.value)
    caisse.addTransac(laTransaction)
    let liste1:IObserver= new listeTransac()
    caisse.subscribe(liste1)
    liste1.update(caisse)
    
    
});

// const render = (container : HTMLElement): void => {
//     const li = document.createElement('li');
//     const titreOp = document.createElement('h4');
//     const parag = document.createElement('p');
//     titreOp.innerText = `${typeOp.value} === debit ? Debit : Credit`;
//     parag.innerText = ` `;
// }