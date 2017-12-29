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
  }

};

export default util;