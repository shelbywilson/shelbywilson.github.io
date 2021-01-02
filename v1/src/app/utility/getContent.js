import content from './content.json';

export function getContent(language = 'en') {
	return content[language] || content.en;
}

export default getContent;