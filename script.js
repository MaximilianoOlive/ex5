const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: [],
  };
  
  function adicionarItem() {
    const nomeItem = prompt("Digite o nome do item:");
    const categoriaItem = prompt("Digite a categoria do item (Frutas, Laticínios, Congelados, Doces, Outros):");
  
    if (listaDeCompras.hasOwnProperty(categoriaItem)) {
      listaDeCompras[categoriaItem].push(nomeItem);
      atualizarLista();
    } else {
      alert("Categoria inválida. Item não adicionado.");
    }
  }
  
  function atualizarLista() {
    const listaCompras = document.getElementById("listaCompras");
    listaCompras.innerHTML = "";
  
    for (const categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        const categoriaElement = document.createElement("li");
        categoriaElement.innerHTML = `<strong>${categoria}:</strong> ${listaDeCompras[categoria].join(", ")}`;
        listaCompras.appendChild(categoriaElement);
      }
    }
  }
  
  document.getElementById("adicionarItem").addEventListener("click", adicionarItem);
  
  // Iniciar com a lista atualizada
  atualizarLista();
  