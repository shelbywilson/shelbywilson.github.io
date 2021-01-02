export function setUrlHash(hash) {
	if (history.pushState) {
		history.pushState(null, null, '#' + hash);
	}
	else {
		location.hash = '#' + hash;
	}
}

export default setUrlHash;