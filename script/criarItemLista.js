import gerarDiaSemana from "./criarDiaSemana.js";
import removerItemLista from "./removerItemLista.js";
import verificarListaVazia from "./verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
var inputItem = document.getElementById("input-carrinho");
let contador = 0;


export function criarItemLista() {
    if (inputItem.value === '') {
        alert('O campo não foi preenchido! Insira um Item!');
        return
    }
    
    const itemLista = document.createElement("li");
    itemLista.classList.add("lista-carrinho")
    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-carrinho-item");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = ("checkbox");
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    nomeItem.classList.add("texto-item");
    const dataItem = document.createElement("p");
    const dataCompleta = gerarDiaSemana();
    dataItem.innerText = dataCompleta;
    dataItem.classList.add("texto-data");
    const botaoLixeira = document.createElement("input");
    botaoLixeira.type = "image";
    botaoLixeira.src = "./img/Lixeira.png";
    botaoLixeira.classList.add("botao-lixeira");
    botaoLixeira.onclick = () => {
        removerItemLista(itemLista),
        verificarListaVazia(listaDeCompras)
    };
    console.log(itemLista)

    inputCheckBox.addEventListener("click", function(){
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }
        else {
            nomeItem.style.textDecoration = "none";
        }
    })
        containerLista.appendChild(inputCheckBox);
        containerLista.appendChild(nomeItem);
        containerLista.appendChild(botaoLixeira);
        itemLista.appendChild(containerLista)
        itemLista.appendChild(dataItem);
    inputItem.value = ''
return itemLista
}