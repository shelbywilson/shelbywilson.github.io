import React from 'react';
import moment from 'moment';

class NewsfeedArticle extends React.Component {
	constructor(props) {
		super(props);

		this.track = this.props.onTrack;
	}
	render() {
		const article = this.props.article;
		return (
			<li className='article' data-source={article.source} data-index={this.props.index}>
				<a href="javascript:void(0)" onMouseUp={this.track} >
					<h2>
						{article.title}
					</h2>
					{article.publishedAt &&
						<h3>
							{moment(article.publishedAt).fromNow()}
						</h3>
					}
					<div className="article-description">
						{article.description}
					</div>
					
				</a>
			</li>
		)
	}
}

export default NewsfeedArticle;