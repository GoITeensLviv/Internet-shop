// let block_1 = {
// 	title: 'Apple TV 32GB',
// 	price: '$49.99'
// }
// let block_2 = {
// 	title: 'Pebble Time',
// 	price: '$29.99'
// }
// let block_3 = {
// 	title: 'Zendure 4-Port USB',
// 	price: '$49.99'
// }
// let block_4 = {
// 	title: 'Withings Smart Body Analyzer ws-50',
// 	price: '$39.99'
// }
// let block_5 = {
// 	title: 'Apple TV 32GB',
// 	price: '$49.99'
// }
// let block_6 = {
// 	title: 'Apple TV 32GB',
// 	price: '$49.99'
// }
// let block_7 = {
// 	title: 'Ollo Clip New',
// 	price: '$19.99'
// }
// let block_8 = {
// 	title: 'Fitbit Charge HR Heart Rate and Activity Tracker',
// 	price: '$19.99'
// }
// let block_9 = {
// 	title: 'Apple Watch Sport 38mm Silver Aluminum Case',
// 	price: '$49.99'
// }
// let block_10 = {
// 	title: 'Bose SoundLink On-Ear Headphones',
// 	price: '$119.99'
// }
// let block_11 = {
// 	title: 'Apple TV 32GB',
// 	price: '$49.99'
// }
// let block_12 = {
// 	title: 'Sonos Play-1 Wireless HiFi System',
// 	price: '$99.99'
// }
// const blocks = [block_1 , block_2 , block_3 , block_4 , block_5 , 
// 		 block_6 , block_7 , block_8 , block_9 , block_10 ,
// 		 block_11 , block_12]

// let search = () => {
// 	let num = document.getElementsByTagName("input")[0].value;
// 	let arr = [];
// 	arr.push(num.split(''))
// 	for (var i = 0; i < blocks.length; i++) {
// 		blocks[i].title.split('')
// 		for (var k = 0; k < arr.length; k++) {
// 			if (blocks[i] == arr[k]){
// 				console.log('equal');
// 			}
			
// 		}
// 	}
// }
// let price_of_the_goods = document.getElementsByTagName("h5").textContent;
// let array_of_prices = [];
// array_of_prices.push(price_of_the_goods)
// console.log(array_of_prices);

let priceFrom = () => {
	let inputFrom = document.getElementById('from').value;
	if (parseInt(inputFrom) == NaN){
		console.log('NaN');
	}
}
		

let cellPhones = () => {
	$('.item').fadeOut(0);
	$('.cellPhones').fadeIn(1500);
}
let computers = () => {
	$('.item').fadeOut(0);
	$('.computers').fadeIn(1500);
}
let tv_audio = () => {
	$('.item').fadeOut(0);
	$('.tv_audio').fadeIn(1500);
}
let cameras = () => {
	$('.item').fadeOut(0);
	$('.cameras').fadeIn(1500);
}
let view_all = () => {
	$('.item').show(1000);
}

let checkbox_1 = document.getElementById('cb_apple');
let checkbox_2 = document.getElementById('cb_bose');
let apple = () => {
	if(checkbox_1.checked){
		$('.item').fadeOut(0);
		$('.apple').fadeIn(1500);
	}else{
		$('.apple').fadeOut(0);
		$('.item').show(1000);
	}
}
let bose = () => {
	if(checkbox_2.checked){
		$('.item').fadeOut(0);
		$('.bose').fadeIn(1500);
	}else{
		$('.bose').fadeOut(0);
		$('.item').show(1000);
	}
}

// Condition

let condition_1 = document.getElementById('new')
let condition_2 = document.getElementById('manufacturer')
let condition_new = () => {
	if(condition_1.checked){
		$('.item').fadeOut(0);
		$('.new').fadeIn(1500);
	}else{
		$('.new').fadeOut(0);
		$('.item').show(1000);
	}
}

let condition_manufacturer = () => {
	if(condition_2.checked){
		$('.item').fadeOut(0);
		$('.manufacturer').fadeIn(1500);
	}else{
		$('.manufacturer').fadeOut(0);
		$('.item').show(1000);
	}
}

let inStorage = () => {
	$('.item').fadeOut(0);
	$('.inStorage').fadeIn(1000);
}
let inOnlineShop = () => {
	$('.item').fadeOut(0);
	$('.inOnlineShop').fadeIn(1000);
}
let checkbox_3 = document.getElementById('free')

let free = () => {
	if(checkbox_3.checked){
		$('.item').fadeOut(0);
		$('.free').fadeIn(1500);
	}else{
		$('.free').fadeOut(0);
		$('.item').show(1000);
	}
}



// let priceFr = () => {
// 	console.log( $( this ).innerHTML = '1' )
// }











