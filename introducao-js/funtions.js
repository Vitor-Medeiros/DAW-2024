//Funão sem retorno (procedure)
function inicio() {
    const menssagem = 'Estou iniciando...';

    console.log(menssagem);
}

//Funão com retorno (function)
function processa(){
    const menssagem = 'Estou processando...';
    return menssagem;
}

function run () {
    inicio ();
    const resultado = processa();
    console.log(resultado);
}
run();