"use strict";

// console.log( "bakery-factory.js" );

let inventory = [];

let bakery = {};
 
//get data

bakery.getinventory = () => {
	return inventory;
};

//load data

bakery.loadInventory = () => {
	return new Promise (function (resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", (event) => {
			let data = JSON.parse(event.target.responseText);
			resolve(data);
		});
	});
};

module.exports = bakery;