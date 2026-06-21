var botaoEnviar = document.getElementById("enviar");

// Pegamos a referência dos elementos da lista usando [0]
var nomeElemento = document.getElementsByName("Nome")[0];
var emailElemento = document.getElementsByName("Email")[0];

botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    var nomeValor = nomeElemento.value;
    var emailValor = emailElemento.value;

    if (nomeValor.length > 300) {
        alert("O nome deve conter no máximo 300 caracteres.");
        return false;
    }

    if (nomeValor.length === 0) {
        alert("O campo de nome é não pode ser deixado em branco.");
        return false;
    }

    if (emailValor.length === 0) {
        alert("O campo de email é não pode ser deixado em branco.");
        return false;
    }

    if (!emailValor.includes("@gmail.com")) {
        alert("O email deve conter '@gmail.com'.");
        return false;
    }

    var novoPedido = {
    nome: nomeValor,
    email: emailValor
};

    var pedidosSalvos = localStorage.getItem("bancoPedidos");
    var listaPedidos = pedidosSalvos ? JSON.parse(pedidosSalvos) : [];

    listaPedidos.push(novoPedido);

    localStorage.setItem("bancoPedidos", JSON.stringify(listaPedidos));


    alert("Formulário enviado com sucesso!");
    console.log("Banco Atualizado:", listaPedidos);

    nomeElemento.value = "";
    emailElemento.value = "";

});
