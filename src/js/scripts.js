const filterByType = require("./functions/filterByType");
const filterByTerm = require("./functions/filterByTerm");
const renderProducts = require("./functions/renderProducts");
const productData = require("../products/data.json");

(function($) {
    $(document).ready(function() {
        var timeStamp = Date.now();
        var searchInput = $("#product-search");
        var filterDropdown = $("#filter-dropdown");

        // List products while page is loading
        renderProducts(productData);

        // Filter products with search
        searchInput.on('keyup', function() {
            var searchTerm = this.value.trim().toLowerCase();
            var productsToShow = filterByTerm(searchTerm, productData);

            renderProducts(productsToShow);
    		});

        // Filter products by type
        filterDropdown.on("change", function() {
            var productsToShow = filterByType(this.value, productData);

            renderProducts(productsToShow);
        });
    });
}(jQuery));
