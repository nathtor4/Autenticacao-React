export function CPFValido(CPF) {
    const cpf = CPF.replace(/\.|-/g, ""); //substituindo . e - por nada
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        return false
    }
    return true
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho=0; tamanho<9; tamanho++) {
        soma += Number(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) % 11;

    if(soma===10 || soma===11) {
        soma=0;
    }

    return soma !==Number(cpf[9]);
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho=0; tamanho<10; tamanho++) {
        soma += Number(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) % 11;

    if(soma===10 || soma===11) {
        soma=0;
    }

    return soma !== Number(cpf[10]);
}