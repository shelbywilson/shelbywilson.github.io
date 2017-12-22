import React from 'react';

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
		console.log(this.props.article)
		if (this.props.article) {
			return (
				<div className='newsfeed-focused-article' onMouseUp={this.toggleFocusedArticle}>
					<div className='newsfeed-focused-article-content' onMouseUp={this._stopPropagation} >
						<h2>
							{this.props.article.title}
						</h2>
						<h3>
							{this.props.source.name}
						</h3>
						<img src={this.props.article.urlToImage} alt='' />
					</div>
				</div>
			)
		}
		return null;
	}
}

export default NewsfeedFocusedArticle;