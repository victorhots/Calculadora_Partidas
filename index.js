let vitoriasdoJogador = 200
let derrotasdoJogador = 5
let nivel;
    function calculodeRankeada(vitorias,derrotas){
        return vitorias - derrotas;
    }
let saldoVitorias = calculodeRankeada(vitoriasdoJogador, derrotasdoJogador);
        console.log("Saldos de vitorias rankeadas é = " + saldoVitorias);
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    }else if (saldoVitorias === 11 || saldoVitorias<=20){
        nivel = "Bronze";
    }else if (saldoVitorias === 21 || saldoVitorias <=50){
        nivel = "Prata";
    }else if (saldoVitorias === 51 || saldoVitorias <=80){
        nivel = "Ouro";
    }else if (saldoVitorias === 81 || saldoVitorias <=90){
        nivel = "Diamante";
    }else if (saldoVitorias === 91 || saldoVitorias <= 100){
        nivel = "Lendário";
    }else {
        nivel = "Imortal";
    }
console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
console.log("Próxima estrutura Switch case");
/* utilizando switch case */
switch (nivel){
    case 'Ferro':
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
        break;
        
    case 'Bronze':
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
        break;

    case 'Prata':
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
        break;

    case 'Ouro':
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
        break;

    case 'Diamante':
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);
        break;
    
    default:
        console.log("O Herói tem de vitorias " + saldoVitorias + " e está no nivel " + nivel);

}
