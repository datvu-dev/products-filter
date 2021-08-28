function renderProducts(data) {
    var itemHTML = '';
    var productsContainer = $('#products ul');

    // List products in HTML template
    $.each(data, function(index, product) {
        itemHTML += '<li class="product" data-type="' + product.type + '" data-sale="' + product.isSale + '">';

        if (product.isSale == true) {
            itemHTML += '<span class="sale-label">On Sale</span>';
        }

        itemHTML += '<div class="img-wrap"><img class="card-img-top" src="/src/products/images/' + product.image + '" alt="' + product.name + '"></div>';
        itemHTML += '<div class="product-body">';
        itemHTML += '<a href="#"><h3>' + product.name + '</h3></a>';
        itemHTML += '<span class="price">' + product.price + '</span>';
        itemHTML += '</div>';
        itemHTML += '</li>';
    });

    productsContainer.html(itemHTML);
}

module.exports = renderProducts;
