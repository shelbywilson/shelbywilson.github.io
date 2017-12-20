import React from 'react';
import $ from 'jquery';
import moment from 'moment';

import NewsfeedArticle from './NewsfeedArticle.jsx';

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
		}.bind(this), 1400)

		this.setSources();
	}
	setSources() {
		$.ajax({
			url: "https://newsapi.org/v1/sources?language=en",
			success: function(data){
				this.setState({
					sources: this._getShuffledArray(data.sources)
				});
				this.setArticles(0, 20);
				setTimeout(function() {
					this.setArticles(21, 40);
				}.bind(this), 400)
				setTimeout(function() {
					this.setArticles(41, data.sources.length);
				}.bind(this), 800)
		 	}.bind(this)
		});
	}
	setArticles(start, end) {
		var i;

		for (i = start; i < end; i += 1) {
			if (this.state.sources[i]) {
				this.getArticles(this.state.sources[i]);
			}
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

					if (article.title) {
						articles.push(article);
					}
				});

				this.setState({
					articles: this._getShuffledArray(articles)
				});
		 	}.bind(this),
		 	error: function (xhr, status) {
		 		console.log(xhr, status)
		 	}
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
										<NewsfeedArticle article={article} 
											key={article.url}
											index={i} />
									)
								}
							}.bind(this))}
						</ul>
						<div className='article-load-more'>
							<button type="button" className='btn-primary' onMouseUp={this.loadMore} >
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