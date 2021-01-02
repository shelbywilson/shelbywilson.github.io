export function getFilePath(file) {
	return window.location.origin + '/dist/files/' + file;
}

export function getImagePath(img) {
	return window.location.origin + '/dist/img/' + img;
}

export function getBinaryToBase64(bin) {
	return btoa(parseInt(bin,2));
}

export function getBase64ToBinary(enc) {
	return parseInt(atob(enc),10).toString(2);
}

export function getPaddedBinary(n, enc) {
	let bin = getBase64ToBinary(enc);
	while(bin.length < n) {
		bin = '0' + bin;
	}

	return bin;
}

export default {
	getFilePath,
	getImagePath,
	getBinaryToBase64,
	getBase64ToBinary,
	getPaddedBinary
};