document.addEventListener('DOMContentLoaded', function() {
    var produtos = [
        new Produto('Xaiomi', 19.99, 'Características: 15 polegadas, Android 5.3', 'product/pera.png'),
        
    ];
    
    gerarListaDeCartoes(produtos);
});

function gerarListaDeCartoes(produtos) {
    var containerCartao = document.getElementById('containerCartao');
    if (!containerCartao) {
        console.error("Elemento com id 'containerCartao' não encontrado.");
        return;
    }
    containerCartao.innerHTML = '';

    produtos.forEach(function(produto) {
        var cartao = criarCartaoHtml(produto);
        containerCartao.appendChild(cartao);
    });
}

function Produto(nome, preco, descricao, urlImagem) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.urlImagem = urlImagem;
}

function criarCartaoHtml(produto) {
    var cartao = document.createElement('div');
    cartao.className = 'cartao';
    cartao.style.border = '1px solid #ccc';
    cartao.style.borderRadius = '5px';
    cartao.style.padding = '10px';
    cartao.style.margin = '10px';
    cartao.style.width = '200px';
    cartao.style.float = 'left';
    cartao.style.position = 'relative'; 
    var imagem = document.createElement('img');
    imagem.src = produto.urlImagem; 
    imagem.style.width = '100%'; 
    cartao.appendChild(imagem); 

    var nome = document.createElement('h2');
    nome.textContent = produto.nome;
    cartao.appendChild(nome);

    var preco = document.createElement('p');
    var precoComDesconto = produto.preco * 0.98; 
    preco.textContent = 'Preço: R$ ' + precoComDesconto.toFixed(2);
    cartao.appendChild(preco);

    var descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    cartao.appendChild(descricao);

    var botaoCompra = document.createElement('button');
    botaoCompra.textContent = 'Comprar';
    botaoCompra.style.backgroundColor = 'green'; 
    botaoCompra.style.color = 'white'; 
    botaoCompra.style.borderRadius = '5px'; 
    cartao.appendChild(botaoCompra);

    var desconto = document.createElement('p');
    var percentualDesconto = ((produto.preco - precoComDesconto) / produto.preco) * 100;
    desconto.textContent = 'Desconto: ' + percentualDesconto.toFixed(2) + '%';
    desconto.style.color = 'green'; 
    desconto.style.border = '1px solid green'; 
    desconto.style.padding = '5px';
    desconto.style.position = 'absolute'; 
    desconto.style.top = '100%'; 
    desconto.style.left = '0'; 
    cartao.appendChild(desconto);

    return cartao;
}
