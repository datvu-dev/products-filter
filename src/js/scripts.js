const filterByType = require("./functions/filterByType");
const filterByTerm = require("./functions/filterByTerm");
const renderProducts = require("./functions/renderProducts");

(function($) {
    $(document).ready(function() {
        var timeStamp = Date.now();
        var searchInput = $("#product-search");
        var filterDropdown = $("#filter-dropdown");
        var productData = {};

        // Load products from json file
        $.getJSON('./src/products/data.json?p=' + timeStamp, function(data) {
            productData = data;

            // List products once page loads
            renderProducts(productData);
        });

        // Filter products with search
        searchInput.on('keyup', function() {
            var searchTerm = this.value.trim().toLowerCase();
            var productsToShow = filterByTerm(searchTerm, productData);

            renderProducts(productsToShow);
    		});
        // $('input#product-search').autocomplete({
        //   lookup: productData,
    		// 	beforeRender: function(container, suggestions) {
    		// 		$('#service-product-page ul.selectors > li').hide();
    		// 		$.each(suggestions, function(key, obj) {
    		// 			$('#service-product-page ul.selectors li[data-product="' + obj.value + '"]').show();
    		// 		});
    		// 	}
        // });

        // Filter products by type
        filterDropdown.on("change", function() {
            var productsToShow = filterByType(this.value, productData);

            renderProducts(productsToShow);
        });
    });
}(jQuery));
