import {getPaddedBinary} from './util';

export function getPatternDecodeFromUrl(url) {
	const split = url.split('_');
	const order = ['threading', 'tie_up', 'treadling'];
	let data = {};
	let section;
	let numCols;
	let rowVals;
	let i;
	let row;
	let temp = [];
	let isValid = true;

	if (split.length >= 3) {
		order.forEach(function (type, index) {
			temp = [];
			section = split[index].split('-');
			if (section.length === 3) {
				numCols = section[1].split(',')[0];
				rowVals = section[2].split('.');

				rowVals.forEach(function(val) {
					row = Array.from(getPaddedBinary(numCols, val).split(''), x => parseInt(x, 10));

					temp.push(row.slice(numCols * -1));
				}.bind(this))

				data[type] = temp;
			} else {
				isValid = false;
			}
		}.bind(this));

		if (!isValid) {
			return false;
		}

		data.patternNumber = split.length === 4 ? split[3].split('-') : false;

		if (data.patternNumber) {
			data.patternNumber.shift();
		}

		return data;
	} 

	return false;
}

export default getPatternDecodeFromUrl;