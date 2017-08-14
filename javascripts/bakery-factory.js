"use strict";

// console.log( "bakery-factory.js" );

let inventory = [];

let bakery = {};
 
let fillInventory = (data) => {
	let keys = Object.keys(data);

	keys.forEach((item) => {
		console.log( "keys", keys );
		data[item].firebaseID = item;
		inventory.push(data[item]);
	});

	console.log( "inventory", inventory );
};


//get data

bakery.getinventory = () => {
	return inventory;
};

//load data

bakery.loadInventory = () => {
	return new Promise (function (resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open('GET', 'https://tester-e4611.firebaseio.com/items.json?orderBy="typeId"&equalTo="1"');
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