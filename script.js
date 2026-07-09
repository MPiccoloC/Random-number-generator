function gerarNumero(){ //função para gerar o número aleatório

    const min = Number(Math.ceil(document.querySelector("#minimo").value))// pega o valor do input minimo
    const max = Number(Math.floor(document.querySelector("#maximo").value)) // pega o valor do input maximo

    if (isNaN(min) || isNaN(max)) {
        alert('Preencha os dois campos com números válidos.');
        return;
    }

    if (min > max) {
        alert('O valor mínimo não pode ser maior que o máximo.');
        return;
    }

    const result = Math.floor(Math.random()*(max - min + 1)) + min //gera o número aleatório entre o mínimo e o máximo

    alert(result + "!") //mostra o resultado em um alert
}