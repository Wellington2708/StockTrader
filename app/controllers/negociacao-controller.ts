import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';


export class NegociacaoController{
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    
    constructor(){
        this.inputData = document.getElementById('data') as HTMLInputElement;
        this.inputQuantidade = document.getElementById('quantidade') as HTMLInputElement;
        this.inputValor = document.getElementById('valor') as HTMLInputElement;
    }

    adiciona() : void{
       const negociacao = this.criaNegociacao();
       this.negociacoes.adiciona(negociacao);
       console.log(this.negociacoes.lista());
       
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