import React from 'react';
import $ from 'jquery';
import moment from 'moment';

const apiKey = 'cb15d26e791f471abee466ce78d79760';

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sources: [],
			articles: [],
			displayEnd: 30,
			isLoad: false
		}

		this.setSources = this.setSources.bind(this);
		this.setArticles = this.setArticles.bind(this);
		this.getArticles = this.getArticles.bind(this);
		this.loadMore = this.loadMore.bind(this);

		setTimeout(function () {
			this.setState({
				isLoad: true
			})
		}.bind(this), 1000)

		this.setSources();
	}
	setSources() {
		$.ajax({
			url: "https://newsapi.org/v1/sources?language=en",
			success: function(data){
				this.setState({
					sources: this._getShuffledArray(data.sources)
				});
				this.setArticles(data.sources);
		 	}.bind(this)
		});
	}
	setArticles() {
		var i;

		for (i = 0; i < this.state.sources.length; i += 1) {
			this.getArticles(this.state.sources[i]);
		}
	}
	getArticles(source) {		
		var articles;

		$.ajax({
			url: "https://newsapi.org/v1/articles?"
				+ "source=" + source.id
				+ "&sortBy=" + source.sortBysAvailable[0]
				+ "&apiKey=" + apiKey,
			success: function(data){
				articles = this.state.articles;
				//articles[data.source] = data.articles;

				data.articles.forEach(function (article){
					article.source = data.source;
					article.category = source.category;

					articles.push(article);
				});

				this.setState({
					articles: this._getSortedArray(articles)
				})
		 	}.bind(this)
		});
	}
	loadMore() {
		this.setState({
			displayEnd: this.state.displayEnd + 20
		})
	}
	_getSortedArray(arr) {
		return arr.sort(function (a, b) {
			return moment(a.publishedAt).isBefore(b.publishedAt) ? 1 : -1
		})
	}
	_getShuffledArray(arr) {
		var ctr = arr.length, temp, index;

		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arr[ctr];
			arr[ctr] = arr[index];
			arr[index] = temp;
	    }

	    return arr;
	}
	render() {
		return (
			<div>
				{this.state.isLoad === false ?
					<div style={{textAlign: 'center', paddingTop: '20px'}}>
						loading...
					</div>
					:
					<div>
						<ul>
							{this.state.articles.map(function (article, i) {
								if (i <= this.state.displayEnd) {
									return (
										<li className='article' key={article.title + i} data-source={article.source} data-index={i}>
											<a href={article.url} target="_blank">
												{article.title}
												{article.publishedAt &&
													<div style={{fontSize: '11px'}}>
														{moment(article.publishedAt).fromNow()}
													</div>
												}
												{window.innerWidth > 480 && 
													<img src={article.urlToImage} />
												}
											</a>
										</li>
									)
								}
							}.bind(this))}
						</ul>
						<div className='article-load-more'>
							<button type="button" onMouseUp={this.loadMore} >
								More + 
							</button>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default Newsfeed;


					// <div style={{fontSize: '11px', textAlign: 'right'}}>
					// 	{article.category}
					// </div>


					// <div className='article-desc'>
					// 	{article.description}
					// </div>
// {this.state.sources.map(function (source) {
// 	console.log(source)
// 	if (this.state.articles[source.id]) {
// 		return (
// 			this.state.articles[source.id].map(function (article) {
// 				return (
// 					<li>
// 						{article.title}
// 					</li>
// 				)
// 			}.bind(this))
// 		)
// 	}
// 	return null;
// }.bind(this))}