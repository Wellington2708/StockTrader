import { Negociacao } from '../models/negociacao.js';


export class NegociacaoController{
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    
    constructor(){
        this.inputData = document.getElementById('data') as HTMLInputElement;
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement;
        this.inputValor = document.getElementById('valor') as HTMLInputElement;
    }

    adiciona() : void{
       const negociacao = this.criaNegociacao();
       console.log(negociacao);
       this.limparFormulario();
    }

    criaNegociacao() : Negociacao {
         //expressão regular or expression regular
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor)
    }

    limparFormulario(){
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    
}