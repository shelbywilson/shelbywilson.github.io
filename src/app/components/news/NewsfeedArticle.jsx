import React, { PropTypes } from 'react';
import moment from 'moment';

class NewsfeedArticle extends React.Component {
	constructor(props) {
		super(props);

		this.track = this.props.onTrack;
	}
	render() {
		const article = this.props.article;
		return (
			<li className={'article' + (this.props.isActive ? ' article-active' : '')} data-source={article.source} data-index={this.props.index}>
				<a href="javascript:void(0)" onMouseUp={this.track} >
					<h3 dangerouslySetInnerHTML={{__html: article.title}}>
					</h3>
					{article.publishedAt &&
						<h6>
							{moment(article.publishedAt).fromNow()}
						</h6>
					}
					<p className="article-description">
						{article.description}
					</p>
					
				</a>
			</li>
		)
	}
}

NewsfeedArticle.propTypes = {
	acticle: PropTypes.object,
	onTrack: PropTypes.func,
	index: PropTypes.number
}

export default NewsfeedArticle;