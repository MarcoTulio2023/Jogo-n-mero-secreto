// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja bem vindo')

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Marco"
console.log(`Olá, ${nome}`)

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome1 = "Tulio"
alert(`Olá, ${nome1}`)

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?')

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 1
let valor2 = 2
resultado = valor1 + valor2
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 3
let valor4 = 4
resultadoSubtracao = valor3 - valor4
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultadoSubtracao}`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
idade = prompt('Digite sua idade:')
if(idade >=18){
    document.write('Maior de idade')
} else{
    document.write('menor de idade')
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
numero = prompt('Digite um número')
if(numero < 0){
    document.write('o número informado é negativo')
} else if(numero > 0){
    document.write('O número informado é postivio')
} else{
    document.write('O número informado é zero')
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 0
while(contador < 10){
    contador++
    console.log(contador)
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 1
if(nota >= 7){
    console.log('Aprovado')
} else{
    console.log('Reprovado')
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random())

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(Math.random()*10 + 1))

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random()*1000 + 1))