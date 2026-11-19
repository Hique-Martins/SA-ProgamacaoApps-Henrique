
let producoes = JSON.parse(localStorage.getItem("producoes")) || [];

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-producoes");

// Salvar produções
function salvarProducoes() {
    localStorage.setItem("producoes", JSON.stringify(producoes));
}

// Mostrar produções
function mostrarProducoes() {
    lista.innerHTML = "";

    if (producoes.length === 0) {
        lista.innerHTML = "<p>Nenhuma produção cadastrada.</p>";
        return;
    }

    producoes.forEach(function(producao, indice) {
        const item = document.createElement("div");

        const nome = document.createElement("p");
        nome.textContent = "Chocolate: " + producao.tipo;

        const quantidade = document.createElement("p");
        quantidade.textContent = "Quantidade: " + producao.quantidade;

        // Botão excluir
        const excluir = document.createElement("button");
        excluir.textContent = "Excluir";
        excluir.type = "button";

        excluir.addEventListener("click", function() {
            const confirmar = confirm("Deseja excluir esta produção?");

            if (confirmar) {
                producoes.splice(indice, 1);

                salvarProducoes();
                mostrarProducoes();

                alert("Produção excluída com sucesso!");
            }
        });

        item.appendChild(nome);
        item.appendChild(quantidade);
        item.appendChild(excluir);

        lista.appendChild(item);
    });
}

// Cadastrar produção
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const tipo = document.getElementById("tipo").value.trim();
    const quantidade = document.getElementById("quantidade").value;

    // Validar nome
    if (!/^(?=(?:.*[A-Za-zÀ-ÿ]){4,})[A-Za-zÀ-ÿ ]+$/.test(tipo)) {
        alert("Digite um nome válido com pelo menos 4 letras e sem números!");
        return;
    }

    // Validar quantidade
    if (
        quantidade === "" ||
        !Number.isInteger(Number(quantidade)) ||
        Number(quantidade) <= 0
    ) {
        alert("Digite uma quantidade válida!");
        return;
    }

    // Verificar se o chocolate já existe
    const existe = producoes.some(function(producao) {
        return producao.tipo.trim().toLowerCase() === tipo.toLowerCase();
    });

    if (existe) {
        alert("Esse chocolate já foi cadastrado!");
        return;
    }

    // Criar produção
    const producao = {
        tipo: tipo,
        quantidade: Number(quantidade)
    };

    // Adicionar produção
    producoes.push(producao);

    // Salvar no navegador
    salvarProducoes();

    alert("Produção cadastrada com sucesso!");

    formulario.reset();

    mostrarProducoes();

    // Voltar ao menu
    document.getElementById("inicio").checked = true;
});

// Mostrar produções ao abrir o sistema
mostrarProducoes();
