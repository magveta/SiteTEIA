function dados() {
    const ds = [
        {id:1, nome:"Camiseta Goku Cinza"},
        {id:2, nome:"Camiseta Dragon Team"},
        {id:3, nome:"Camiseta Bills"},
        {id:4, nome:"Camiseta Sayian Blue"},
        {id:5, nome:"Camiseta Goku VS Bills"},
        {id:6, nome:"Camiseta Mestre Kame"},
        {id:7, nome:"Camiseta Instinto Superior"},
        {id:8, nome:"Camiseta Cell e Freeza"},
        {id:9, nome:"Camiseta Preta Goku"}
    ]
    return ds
}

const camisetas = dados();
let carrinho = [];

function comprar(id_recebido) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id: id_recebido });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    console.log("Item adicionado ao carrinho:", { id: id_recebido });
    alert("Item adicionado ao carrinho!");
    
    console.log("Carrinho atual:", carrinho);

    atualizar_carrinho();
}


function atualizar_carrinho() {
    let lista = document.getElementById('lista-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `1x ${camisetas[item.id - 1].nome} - R$ 49,90`;
        lista.appendChild(li);
    });

    let items_carrinho = parseFloat(carrinho.length)
    total.textContent = `TOTAL: R$${(items_carrinho * 49.90).toFixed(2)}`;
}
