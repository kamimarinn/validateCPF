function validarCPF() {
    var cpf = document.getElementById("cpf").value;
    var cpfSoNumeros = cpf.replace(/\D/g, ''); 
    var novePriNumeros = cpfSoNumeros.substr(0, 9);
    var dezPriNumeros = cpfSoNumeros.substr(0, 10);
    var somaNovePriNumeros = 0;
    var somaDezPriNumeros = 0;
    var multiplicador = 10;
 
    for(var i = 0; i < 9; i++) {
        somaNovePriNumeros += parseInt(novePriNumeros[i]) * multiplicador;
        multiplicador--;
    }
 
    multiplicador = 11;
 
    for(var i = 0; i < 10; i++) {
        somaDezPriNumeros += parseInt(dezPriNumeros[i]) * multiplicador;
        multiplicador--;
    }
 
    var resultadoModulo1 = (somaNovePriNumeros * 10) % 11;
    var resultadoModulo2 = (somaDezPriNumeros * 10) % 11;
 
    console.log(resultadoModulo1);
    console.log(resultadoModulo2);
 
    if((resultadoModulo1.toString() + resultadoModulo2.toString()) === cpfSoNumeros.substr(9, 2)) {
        alert('Válido!');
    } else {
        alert('Inválido');
    }
}