import React from 'react';
import moment from 'moment';

import Modal from './../common/modal/Modal.jsx';

class NewsfeedFocusedArticle extends React.Component {
	constructor(props) {
		super(props);

		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
	}
	toggleFocusedArticle() { 
		this.props.onToggleFocusedArticle(false);
	}
	render() {
		const article = this.props.article;

		return (
			<Modal onClose={this.toggleFocusedArticle}
				display={article !== false}
				customClass='newsfeed-focused-article'>
				<h3 dangerouslySetInnerHTML={{__html: article.title}}>
				</h3>
				<div className='newsfeed-focused-article-about'>
					<h6>
						{moment(article.publishedAt).fromNow()}
					</h6>
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
			</Modal>
		)
	}
}

export default NewsfeedFocusedArticle;