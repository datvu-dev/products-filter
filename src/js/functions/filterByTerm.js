function filterByTerm(searchTerm, data) {
    if (!data.length) throw Error("data cannot be empty");

    var result = {}, key;

    if (!searchTerm || searchTerm == '') {
        return data;
    }

    for (key in data) {
        var productName = data[key].name.toLowerCase();
        var productType = data[key].type.toLowerCase();

        if (productName.includes(searchTerm) || productType.includes(searchTerm)) {
            result[key] = data[key];
        }
    }

    return result;
}

module.exports = filterByTerm;
