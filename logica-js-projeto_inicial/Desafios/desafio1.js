alert('Boas vindas ao nosso site!')
let nome = 'lua'
let idade = 25
numeroDeVendas = 50
saldoDisponivel = 1000
alert('Erro! Preencha todos os campos')
mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro)
nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade?')

if(idade >= 18){
    document.write('Pode tirar a habilitação!')
}