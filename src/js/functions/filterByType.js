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
