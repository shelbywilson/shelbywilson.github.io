import React from 'react';
import moment from 'moment';

import Modal from './../common/modal/Modal.jsx';

import colors from './data/colors';

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
		const category = this.props.source.category || '';

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
					
					<span className={'newsfeed-focused-article-category ' + (this.props.source.category)} style={{background: colors[this.props.source.category]}}>
						{category.replace(/-/g, ' ')}
					</span>
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