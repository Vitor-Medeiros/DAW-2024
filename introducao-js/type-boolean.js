const value1 = true;
const value2 = false;

//Thrusty / Falsy --> Variáveis vazias ou com valor 0, se submeter
//a um teste lógico, se tornarão um tipo boolean (trusty/falsy)

//Teste lógico 1

if (value1) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

//O de cima vira:

if (value1) console.log("Verdadeiro");

//Opedado ternário
const resultado = value1 ? "Verdadeiro" : "Falso";