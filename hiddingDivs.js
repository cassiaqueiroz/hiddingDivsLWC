import { LightningElement } from "lwc";

export default class App extends LightningElement {
    
 div1 = {
   empresa: "SoulCoderosa",
   cnpj: "45.997.418/0001-53",
   endereco: "Rua 13 de maio, 3664"
 };
 div2 = {
   produto: "Mouse",
   descricao: "Mouse da Abolição",
   preco: "50 moedas de réis"
 };
 div3 = {
   promocao: true,
   oferta1: "10% off, familiaaa",
   oferta2: "Frete grátis, mis amigos"
 };


 isDiv2And3Visible = true;


 handleButtonClick() {
   this.isDiv2And3Visible = !this.isDiv2And3Visible;
 }


}
