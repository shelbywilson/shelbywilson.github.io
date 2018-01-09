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
    return window.location.origin + '/files/' + file;
  }

};

export default util;