(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function filterByType(searchType, data) {
  // console.log(data);
    if (!searchType) throw Error("searchType cannot be empty");
    if (!data.length) throw Error("data cannot be empty");
    var result = {}, key;

    if (searchType == 'All') {
        return data;
    }

    for (key in data) {
        if ((searchType == 'On Sale' && data[key].isSale == true) || searchType == data[key].type) {
            result[key] = data[key];
        }
    }

    return result;
}

module.exports = filterByType;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function($) {
    const filterByType = require("./functions/filterByType");
    const renderProducts = require("./functions/renderProducts");

    $(document).ready(function() {
        var timeStamp = Date.now();
        var filterDropdown = $("#filter-dropdown");
        var productData = {};

        // Load products from json file
        $.getJSON('./src/products/data.json?p=' + timeStamp, function(data) {
            productData = data;

            // List products once page loads
            renderProducts(productData);
        });

        // Filter products by type
        filterDropdown.on("change", function() {
            var productsToShow = filterByType(this.value, productData);

            renderProducts(productsToShow);
        });
    });
}(jQuery));

},{"./functions/filterByType":1,"./functions/renderProducts":2}]},{},[3]);