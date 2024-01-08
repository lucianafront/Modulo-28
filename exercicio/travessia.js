class Rio{
    constructor(){
        this.barco = ['homem'];
        this.ladoEsquerdo = [];
        this.ladoDireito = [];
    }

    verificarRegras(){
   
        if (this.ladoEsquerdo.length === 0) return "Tudo ok até aqui!";
        
        if(this.ladoEsquerdo.includes('lobo') && this.ladoEsquerdo.includes('cabra') || 
            this.ladoDireito.includes('lobo')  && this.ladoDireito.includes('cabra') ||
            this.ladoDireito.includes('alfafa')  && this.ladoDireito.includes('cabra') ||
            this.ladoEsquerdo.includes('alfafa')  && this.ladoEsquerdo.includes('cabra') )
        return "A cabra foi comida pelo lobo ou  a cabra comeu a alfafa";

        return "Tudo ok até aqui!";
    }

    adicionarObjeto(objeto){
        this.ladoEsquerdo.push(objeto);
    }

    removerObjeto(objeto){
     this.ladoEsquerdo = this.ladoEsquerdo.filter(item => item !== objeto);

    }

    atravessar(objeto) {
        this.removerObjeto(objeto);
        this.barco.push(objeto);
    }

    colocarDoLadoDireito(objeto){
            this.barco = this.barco.filter(item => item !== objeto);
            this.ladoDireito.push(objeto);
        
    }

    colocarDoLadoEsquerdo(objeto){
            this.barco = this.barco.filter(item => item !== objeto);
            this.ladoEsquerdo.push(objeto);
    }

    voltar(objeto){
        this.ladoDireito = this.ladoDireito.filter(item => item !== objeto);
        this.barco.push(objeto);
    }

    getLadoEsquerdo(){
        return this.ladoEsquerdo;
    }

    getLadoDireito(){
        return this.ladoDireito;
    }

    getBarco(){
        return this.barco;
    }

    getInformacoes(){
        console.log('Lado esquerdo: ' + rio.getLadoEsquerdo());
        console.log('Lado direito: ' + rio.getLadoDireito());
        console.log('Dentro do barco: ' + rio.getBarco());
        console.log(rio.verificarRegras());
        console.log('------------------------');
         
    }

}

var rio = new Rio();
rio.adicionarObjeto('lobo');
rio.adicionarObjeto('cabra');
rio.adicionarObjeto('alfafa');

// console.log('Lado esquerdo: ' + rio.getLadoEsquerdo());
// console.log('Lado direito: ' + rio.getLadoDireito());
// console.log('Dentro do barco: ' + rio.getBarco());

rio.atravessar('cabra');

rio.getInformacoes();

rio.colocarDoLadoDireito('cabra');

rio.getInformacoes();


rio.atravessar('alfafa');
rio.voltar('cabra');
rio.colocarDoLadoDireito('alfafa');



rio.getInformacoes();

rio.colocarDoLadoEsquerdo('cabra');
rio.atravessar('lobo');
rio.colocarDoLadoDireito('lobo');

rio.getInformacoes();

rio.atravessar('cabra');
rio.colocarDoLadoDireito('cabra');
rio.colocarDoLadoDireito('homem');

rio.getInformacoes();
































  /*
  
  
Um homem precisa atravessar um rio com um barco que
possui capacidade apenas para carregar ele mesmo e mais
um de seus três pertences, que são: um lobo, uma cabra e um
maço de alfafa. Em cada viagem só poderá ir o homem e
apenas um de seus pertences. A seguinte regra deverá ser
respeitada: o lobo não pode ficar sozinho com a cabra e nem
a cabra sozinha com o maço de alfafa. Escreva um algoritmo
para fazer a travessia dos pertences que estão em uma
margem do rio para a outra.



A solução para o problema envolve uma série de passos para levar o homem e seus pertences (lobo, cabra e alfafa) de uma margem do rio para a outra, seguindo as regras estabelecidas. Aqui está uma possível sequência de transporte:

O homem leva a cabra para a margem direita (MD).
O homem volta sozinho para a margem esquerda (ME).

O homem leva o lobo para a margem direita (MD).
O homem volta com a cabra para margem esquerda (ME) 
O homem leva a alfafa para a margem direita (MD).
O homem volta sozinho para a margem esquerda (ME).
O homem leva a cabra para a margem direita (MD).
Neste ponto, o homem, a cabra, o lobo e a alfafa estão todos na margem direita, e o problema foi resolvido com sucesso, seguindo as regras estabelecidas.

  
  */