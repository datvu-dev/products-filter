const filterByType = require("./filterByType");
const productData = require("../../products/data.json");

describe("Filter products by type", () => {
   test('Type All should return all products', () => {
       var result = filterByType('All', productData);

       expect(Object.keys(result).length).toBe(8);
   });

   test('Type On Sale should return 4 products that are on sale', () => {
       var result = filterByType('On Sale', productData);

       expect(Object.keys(result).length).toBe(4);
   });

   test('Type Cider should return 1 product that is a cider', () => {
       var result = filterByType('Cider', productData);

       expect(Object.keys(result).length).toBe(1);
   });
})
