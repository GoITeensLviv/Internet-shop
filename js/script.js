let block_1 = {
	title: 'Apple TV 32GB',
	price: '$49.99'
}
let block_2 = {
	title: 'Pebble Time',
	price: '$29.99'
}
let block_3 = {
	title: 'Zendure 4-Port USB',
	price: '$49.99'
}
let block_4 = {
	title: 'Withings Smart Body Analyzer ws-50',
	price: '$39.99'
}
let block_5 = {
	title: 'Apple TV 32GB',
	price: '$49.99'
}
let block_6 = {
	title: 'Apple TV 32GB',
	price: '$49.99'
}
let block_7 = {
	title: 'Ollo Clip New',
	price: '$19.99'
}
let block_8 = {
	title: 'Fitbit Charge HR Heart Rate and Activity Tracker',
	price: '$19.99'
}
let block_9 = {
	title: 'Apple Watch Sport 38mm Silver Aluminum Case',
	price: '$49.99'
}
let block_10 = {
	title: 'Bose SoundLink On-Ear Headphones',
	price: '$119.99'
}
let block_11 = {
	title: 'Apple TV 32GB',
	price: '$49.99'
}
let block_12 = {
	title: 'Sonos Play-1 Wireless HiFi System',
	price: '$99.99'
}
const blocks = [block_1 , block_2 , block_3 , block_4 , block_5 , 
		 block_6 , block_7 , block_8 , block_9 , block_10 ,
		 block_11 , block_12]
let search = () => {
	let num = document.getElementsByTagName("input")[0].value;
	if (num != block_1.title){
		console.log('not equal');
	}
	else{
		console.log('equal');
	}
}