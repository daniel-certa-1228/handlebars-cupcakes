"use strict";

console.log( "main.js" );

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery-factory.js'),
	cakeTemplate = require('../templates/cake-grid.hbs'),
	welcomeTemplate = require('../templates/welcome.hbs'),
	welcomeData = require('../javascripts/welcome-data.js');
//auto returns
Handlebars.registerHelper("incrementer", (value) => parseInt(value) + 1);
Handlebars.registerPartial("footer", require('../templates/partials/footer.hbs'));

$("#welcome").append(welcomeTemplate(welcomeData));


function populatePage(stuff) {
	let newDiv = document.createElement("div");
	newDiv.innerHTML = cakeTemplate(stuff);
	$("#cake-cards").append(newDiv);

}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadInventoryResolve) => {
		console.log( "Cake Promise", inventoryFromLoadInventoryResolve );
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reject) => {
		console.log( "Something went horribly, horribly wrong." );
	}); 
 
