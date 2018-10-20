import content from './content.json';

let util = {

	getContent(language = 'en') {
		return content[language] || content.en;
	},

	setUrlHash(hash) {
			if (history.pushState) {
				history.pushState(null, null, '#' + hash);
		}
		else {
				location.hash = '#' + hash;
		}
	},

	getFilePath(file) {
		return window.location.origin + '/dist/files/' + file;
	},

	getImagePath(img) {
		return window.location.origin + '/dist/img/' + img;
	},

	getBinaryToBase64(bin) {
		return btoa(parseInt(bin,2));
	},

	getBase64ToBinary(enc) {
		return parseInt(atob(enc),10).toString(2);
	},

	getPaddedBinary(n, enc) {
		let bin = this.getBase64ToBinary(enc);
		while(bin.length < n) {
			bin = '0' + bin;
		}

		return bin;
	},

	getPatternEncodedUrl(data) {
		let url = '';

		url += 't-' + data.threading[0].length + ',' + data.threading.length + '-';

		data.threading.forEach(function(row) {
			url += this.getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
		}.bind(this));

		url = url.slice(0,-1);
		url += '_tu-' + data.tie_up[0].length + ',' + data.tie_up.length + '-';

		data.tie_up.forEach(function(row) {
			url += this.getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
		}.bind(this));

		url = url.slice(0,-1);
		url += '_to-' + data.tie_up[0].length + ',' + data.tie_up.length + '-';

		data.treadling.forEach(function(row) {
			url += this.getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
		}.bind(this));

		url = url.slice(0,-1);

		return url;
	},

	getPatternDecodeFromUrl(url) {
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
						row = Array.from(this.getPaddedBinary(numCols, val).split(''), x => parseInt(x, 10));

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

};

export default util;