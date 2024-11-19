//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
 let diaDaSemana = prompt('Qual o dia da semana?')
 if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
    document.write('Bom final de semana!')
 } else {
    document.write('Boa semana!')
 }


 // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 let numero = prompt('Digite um número')
 if(numero > 0){
    document.write('Número informado é positivo')
 } else{
    document.write('Número informado é negativo')
 }

 //Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite a pontuação atingida no jogo')
if(pontuacao >= 100){
    document.write('Parabéns, você venceu!')
} else{
    document.write('Tente novamente para ganhar')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 3000
document.write(`O saldo da conta é ${saldo}`)

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome:')
alert(`Seja bem vindo ${nome} `)