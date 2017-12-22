import React from 'react';
import moment from 'moment';

class NewsfeedFocusedArticle extends React.Component {
	constructor(props) {
		super(props);

		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
	}
	toggleFocusedArticle(e) {
		this._stopPropagation(e);
 
		this.props.onToggleFocusedArticle(false);
	}
	_stopPropagation(e) {
		e.stopPropagation(e)
	}
	render() {
		const article = this.props.article;
		if (this.props.article) {
			return (
				<div className='newsfeed-focused-article' onMouseUp={this.toggleFocusedArticle}>
					<div className='newsfeed-focused-article-content' onMouseUp={this._stopPropagation} >
						<h2>
							{article.title}
						</h2>
						<div className='newsfeed-focused-article-about'>
							<h3>
								{moment(article.publishedAt).fromNow()}
							</h3>
							<a className='newsfeed-focused-article-link' href={article.url} target='_blank'>
								read article on {this.props.source.name}
							</a>
						</div>
						<div className="newsfeed-focused-article-description">
							{article.description ?
								<p>
									{article.urlToImage &&
										<img src={article.urlToImage} alt='' />
									}
									{article.description}
								</p>
								:
								<img src={article.urlToImage} className='full-size' alt='' />
							}
						</div>
					</div>
				</div>
			)
		}
		return null;
	}
}

export default NewsfeedFocusedArticle;