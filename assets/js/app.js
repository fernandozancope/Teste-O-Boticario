$(function () {

    let carrinho = 0.00;
     $("#cart").html('R$ '+carrinho);

    $.getJSON("assets/js/products.json", function(obj) {
        let html = '';
        let count = 0;
        $.each(obj, function(key, value) {

            html += `<div class="col-sm-6 col-lg-4 produto-unit">
	<div class="card">
    <a class="img-over"><img src="${value.images[0].imageUrl}" class="card-img-top" alt=""></a>
    <div class="card-body">
	<h3 class="card-title nome-produto">${value.name}</h3>
	<span class="valor-produto">R$ ${value.Value.toFixed(2).toString().replace(".", ",")}</span>
    	<form>
        <input type="hidden" id="preco${count}" value="${value.Value.toFixed(2)}">
        <button type="button" name="comprar" index="${count}" class="btn-lg btn-block bt-comprar">Comprar</button>
        </form>
    </div>

  </div>
</div>
                `;

            count++;
        });
        $("div[id*=content-products]").html(html);
    });

    $(document).on("click", "button[name*=comprar]", function() {
       let i = $(this).attr('index');
       var valor = parseFloat($("input[id*=preco"+i+"]").val());
       carrinho += valor;
       $("#cart").html('R$ '+carrinho.toFixed(2).toString().replace(".", ","));
    });

});

// function addCart(el) {
//     let preco = $("#preco").val();
//     console.log(preco);
// }
