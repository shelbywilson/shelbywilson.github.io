import {getBinaryToBase64} from './util';

export function getPatternEncodedUrl(data) {
	let url = '';

	url += 't-' + data.threading[0].length + ',' + data.threading.length + '-';

	data.threading.forEach(function(row) {
		url += getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
	}.bind(this));

	url = url.slice(0,-1);
	url += '_tu-' + data.tie_up[0].length + ',' + data.tie_up.length + '-';

	data.tie_up.forEach(function(row) {
		url += getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
	}.bind(this));

	url = url.slice(0,-1);
	url += '_to-' + data.tie_up[0].length + ',' + data.tie_up.length + '-';

	data.treadling.forEach(function(row) {
		url += getBinaryToBase64(row.toString().replace(/,/g, '')) + '.';
	}.bind(this));

	url = url.slice(0,-1);

	return url;
}

export default getPatternEncodedUrl;