// maximum price stock

function maxProfitStock(arr) {
	let maxProfit = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			maxProfit = maxProfit + (arr[i] - arr[i - 1]);
		}
	}
	return maxProfit;
}

// Invoke
let prices = [ 100, 180, 260, 310, 40, 535, 695 ];
console.log(maxProfitStock(prices));
