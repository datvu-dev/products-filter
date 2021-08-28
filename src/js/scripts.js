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
