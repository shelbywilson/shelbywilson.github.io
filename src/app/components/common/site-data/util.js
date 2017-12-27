import content from './content.json';

let util = {

  getContent(language = 'en') {
    return content[language] || content.en;
  }

};

export default util;