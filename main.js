
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

function dirigir() {
    const idade = Number(prompt("Qual a sua idade?"))
    
    if (idade >= 18) {
        console.log("Você pode dirigir")
    }
    else {
        console.log("Você não pode dirigir")
    }
}
dirigir()

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

function turno() {
    const tur = prompt("Em que turno você estuda?")

    if (tur === "M") {
        console.log("Bom Dia!")
    }
    
    else if (tur === "V") {
        console.log("Boa Tarde!")
    }

    else {
        console.log("Boa Noite!")
    }
}
turno()

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt()
switch(turno) {
    case 'M':
        console.log("Bom Dia!")
        break;
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break;
    default:
        console.log("Turno não encontrado")
        break;
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const genero = prompt("Qual o gênero do filme que vão assistir?")
const valor = prompt("Qual o valor do ingresso?")

if (genero === "Fantasia" && valor <= 15) {
    console.log("Bom Filme!")
}
else {
    console.log("Escolha outro filme :(")
}

// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const genero = prompt("Qual o gênero do filme que vão assistir?")
const valor = prompt("Qual o valor do ingresso?")

if (genero === "Fantasia" && valor <= 15) {
    const lanche = prompt("Qual lanche você vai querer?")
    console.log("Bom Filme! Aproveite o seu(sua)", lanche)
}
else {
    console.log("Escolha outro filme :(")
}