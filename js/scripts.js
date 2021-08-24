(function($) {
    $(document).ready(function() {
        var timeStamp = Date.now();
        var productArr = [];

        // Load products from json file
        $.getJSON('../products/data.json?p=' + timeStamp, function(data) {
            var itemHTML = '';
            var count = 0;
            var item_per_row = 4;

            // List products on the front end
            $.each(data, function(index, product) {
                itemHTML += '<li class="product" data-type="' + product.type + '" data-sale="' + product.isSale + '">';
                itemHTML += '<div class="img-wrap"><img class="card-img-top" src="../products/images/' + product.image + '" alt="' + product.name + '"></div>';
                itemHTML += '<div class="product-body">';
                itemHTML += '<a href="#"><h3>' + product.name + '</h3></a>';
                itemHTML += '<span class="price">' + product.price + '</span>';
                itemHTML += '</div>';
                itemHTML += '</li>';
      			});

            $('#products ul').html(itemHTML);
        });
    });
}(jQuery));
