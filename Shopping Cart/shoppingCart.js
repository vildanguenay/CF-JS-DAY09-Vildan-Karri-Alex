var putin = document.getElementById("select_images");
	
for (var i =0;  i< shop.length; i++) {



//remove discount calculation  ${shop[i].PRIZE - 10} €
	putin.innerHTML+= `<div class="notnext"><img src ="${shop[i].Image}"> 
	<p class = "Cat">${shop[i].CATEGORY}<br></p> 
	<p class = "Pro">${shop[i].NAME}<br></p>
	<p class = "Pr">${shop[i].PRIZE} €<br></p> 
	<button class="addToCartButton" id=${i}><i class="fas fa-shopping-cart"></i></button>
	</div>
	`
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

	//console.log(putin[i] + "\n");
	for (let i = 0; i < shop.length; i++) {
		document.getElementsByClassName("addToCartButton")[i].addEventListener("click", addToCart, false)
	}

let shoppingCartArray = {};

function addToCart() {
	shoppingCartArray.push(shop[i]);
	

	document.getElementById("shoppingCartCounter").innerHTML = shoppingCartCounter;

}

//create empty object array
//clicked element goes into object array with .push
//object array gets displayed in shopping cart button
//add hover effect on cart icon (empty basket) + (object(s) in basket)






/*let inShoppingCart = (function() {
	cart =[];
}

function Item(name, price, count) {
	this.name = name;
	this.price = price;
	this.count = count;
}

function saveCart() {
	sessionStorage.setItem('shoppingCart', JSON.stringify(cart());
}

function loadCart() {
	cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
}
if (sessionStorage.getItem("shoppingCart") != null) {
	loadCart();
}*/

/*send clicked objects into object array (push?)



display amount of clicks in paragraph shoppingCartCounter
link shopping cart icon to shopping cart page 
render shopping cart page from new object array 

*/
