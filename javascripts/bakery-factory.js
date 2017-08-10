"use strict";

// console.log( "bakery-factory.js" );

let inventory = [];

let bakery = {};
 
let fillInventory = (data) => {
	data.forEach(function(element){
		inventory.push(element);
	});
};


//get data

bakery.getinventory = () => {
	return inventory;
};

//load data

bakery.loadInventory = () => {
	return new Promise (function (resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "https://tester-e4611.firebaseio.com/ccakes.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", (event) => {
			let data = JSON.parse(event.target.responseText);
			console.log( "data", data );
			fillInventory(data);
			console.log( "inventory", inventory );
			resolve(data);
		});
	});
};

module.exports = bakery;