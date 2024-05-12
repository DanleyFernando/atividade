document.addEventListener('DOMContentLoaded', function() {
    var produtos = [
        new Produto('Produto 1', 19.99, 'Descrição do Produto 1', 'imagens/pera.png'),
        new Produto('Produto 2', 29.99, 'Descrição do Produto 2', 'imagem2.jpg'),
        new Produto('Produto 3', 39.99, 'Descrição do Produto 3', 'imagem3.jpg'),
        new Produto('Produto 4', 49.99, 'Descrição do Produto 4', 'imagem4.jpg')
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

    var imagem = document.createElement('img');
    imagem.src = produto.urlImagem;
    imagem.style.maxWidth = '100%';
    imagem.style.height = 'auto';
    cartao.appendChild(imagem);

    var nome = document.createElement('h2');
    nome.textContent = produto.nome;
    cartao.appendChild(nome);

    var preco = document.createElement('p');
    var precoComDesconto = produto.preco * 0.98; // Aplica o desconto de 2%
    preco.textContent = 'Preço: R$ ' + precoComDesconto.toFixed(2);
    cartao.appendChild(preco);

    var desconto = document.createElement('p');
    var percentualDesconto = ((produto.preco - precoComDesconto) / produto.preco) * 100;
    desconto.textContent = 'Desconto: ' + percentualDesconto.toFixed(2) + '%';
    cartao.appendChild(desconto);

    var descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    cartao.appendChild(descricao);

    var botaoCompra = document.createElement('button');
    botaoCompra.textContent = 'Comprar';
    botaoCompra.style.backgroundColor = 'green'; 
    botaoCompra.style.color = 'white'; 
    botaoCompra.style.borderRadius = '5px'; 
    cartao.appendChild(botaoCompra);

    return cartao;
}
