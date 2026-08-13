import { criarItemLista } from "./script/criarItemLista.js";
import verificarListaVazia from "./script/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const botaoLimpar = document.getElementById("limpar-lista")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemLista = criarItemLista(verificarListaVazia);
    listaDeCompras.appendChild(itemLista);
    verificarListaVazia(listaDeCompras);
}); 
