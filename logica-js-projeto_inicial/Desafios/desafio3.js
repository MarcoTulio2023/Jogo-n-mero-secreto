//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
contador = 0
while (contador < 10){
    contador++
    console.log(contador)
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
cont = 11
while(cont > 0){
    cont--
    console.log(cont)
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
numero = prompt('Digite um número')
while(numero > 0){
    numero--
    console.log(numero)
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
n = prompt('Digite um número:')
let i = -1
while( i < n){
    i++
    console.log(i)
}