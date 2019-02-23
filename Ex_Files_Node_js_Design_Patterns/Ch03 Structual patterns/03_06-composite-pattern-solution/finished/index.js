var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

// we have both catalogItem and catalogGroup, like tree structure had nodes and leaves
var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

// catalogGroup and catalogItem should have the same interface
// we can compose a tree structure
var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup("Food for while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99)
]);

var keychain = new CatalogItem("Key Chain", .99);

// catalog can add both catalogItem or catalogGroup
// we treat tree leaves and nodes with uniformly manners
var catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`);

catalog.print();
