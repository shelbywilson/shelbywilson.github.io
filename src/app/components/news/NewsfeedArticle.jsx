import React from 'react';
import moment from 'moment';

class NewsfeedArticle extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const article = this.props.article;
		return (
			<li className='article' data-source={article.source} data-index={this.props.index}>
				<a href={article.url} target="_blank">
					<h2>
						{article.title}
					</h2>
					{article.publishedAt &&
						<div style={{fontSize: '0.8rem'}}>
							{moment(article.publishedAt).fromNow()}
						</div>
					}
					<div style={{fontSize: '0.9rem'}}>
						{article.description}
					</div>
					
				</a>
			</li>
		)
	}
}

export default NewsfeedArticle;

// {window.innerWidth > 480 && 
// 						<img src={article.urlToImage} alt={article.title}/>
// 					}