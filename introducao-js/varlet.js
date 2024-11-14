const exibeMensagemVar = () => {
    var msgForIF = 'brasil';

    if (true) {
        var msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }
    console.log('1',msgForIF);
    console.log('2',msgDentroIF);
}

exibeMensagemVar();

const exibeMensagemLet = () => {
    let msgForIF = 'brasil';

    if (true) {
        let msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }
    console.log('1', msgForIF);
    console.log('2', msgDentroIF);
}

exibeMensagemLet();
