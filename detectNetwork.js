var detectNetwork = function(cardNumber) {
	var cardNumberLength = cardNumber.length;

	var prefix = function(prefixLength){
		return parseInt(cardNumber.substring(0, prefixLength));
	}

	var prefix1 = prefix(1);
	var prefix2 = prefix(2);
	var prefix3 = prefix(3);
	var prefix4 = prefix(4);
	var prefix6 = prefix(6);

	var maestroPrefixes = [5018, 5020, 5038, 6304];
	var mastercardPrefixes = [51,52,53,54,55];
	var switchPrefixes = [4903, 4905, 4911, 4936, 6333, 6759]
	var longSwitchPrefixes = [564182, 633110]

	var isVisaPrefix = prefix1 === 4;
	var isMasterCardPrefix = mastercardPrefixes.includes(prefix2);
	var isDiscoverPrefix = prefix4 === 6011 || (prefix3 >= 644 && prefix3 <= 649) || prefix2 === 65;
	var isDinersPrefix = prefix2 === 38 || prefix2 === 39;
	var isAmexPrefix = prefix2 === 34 || prefix2 === 37;
	var isMaestroPrefix = maestroPrefixes.includes(prefix4);
	var isChinaPrefix = prefix6 >= 622126 && prefix6 <= 622925 || prefix3 >= 624 && prefix3 <= 626 || prefix4 >= 6282 && prefix4 <= 6288;
	var isSwitchPrefix = switchPrefixes.includes(prefix4) || longSwitchPrefixes.includes(prefix6);
	
	if(isSwitchPrefix && (cardNumberLength === 16 || cardNumberLength === 18 || cardNumberLength === 19)){
		return "Switch"
	}else
	if(isVisaPrefix && (cardNumberLength === 13 || cardNumberLength === 16 || cardNumberLength === 19)){
		return "Visa";
	}else
	if (isMasterCardPrefix && cardNumberLength === 16){
		return "MasterCard"
	}else
	if(isDiscoverPrefix && (cardNumberLength === 16 || cardNumberLength === 19)){
		return "Discover"
	}else 
	if(isDinersPrefix && cardNumberLength === 14){
		return "Diner's Club";
	}else
	if(isAmexPrefix && cardNumberLength === 15){
		return "American Express";
	}else 
	if(isMaestroPrefix && cardNumberLength >= 12 && cardNumberLength <= 19){
		return "Maestro"
	}else 
	if(isChinaPrefix && cardNumberLength >= 16 && cardNumberLength <= 19){
		return "China UnionPay"
	}else
	{
		return "Not a valid card";
	}
};

