import React from 'react';
import $ from 'jquery';
import moment from 'moment';

import NewsfeedArticle from './NewsfeedArticle.jsx';
import NewsfeedFocusedArticle from './NewsfeedFocusedArticle.jsx';
import NewsfeedBackground from './NewsfeedBackground.jsx';

const apiKey = 'cb15d26e791f471abee466ce78d79760';

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sources: [],
			articles: [],
			displayEnd: 30,
			isLoaded: false,
			sourcesDictionary: {},
			count: {},
			clicks: 0,
			focus: false,
			numLoaded: 0,
			isSorted: false
		}

		this.getArticles = this.getArticles.bind(this);
		this.loadMore = this.loadMore.bind(this);
		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
		this.track = this.track.bind(this);
		this.setSources = this.setSources.bind(this);
		this.setArticles = this.setArticles.bind(this);
		this.toggleSortedArray = this.toggleSortedArray.bind(this);
		this.resetPage = this.resetPage.bind(this);

		this.setSources();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.numLoaded === this.state.sources.length && !this.state.isLoaded) {
			this.setState({
				isLoaded: true
			})
		}
	}
	resetPage() {
		this.setState({
			isLoaded: false,
			numLoaded: 0,
			count: {},
			clicks: 0
		});

		this.setArticles(0, 20);
		setTimeout(function() {
			this.setArticles(21, 40);
		}.bind(this), 500)
		setTimeout(function() {
			this.setArticles(41, this.state.sources.length);
		}.bind(this), 1000)
	}
	setSources() {
		$.ajax({
			url: "https://newsapi.org/v1/sources?language=en",
			success: function(data){
				this.setState({
					sources: this._getShuffledArray(data.sources),
					sourcesDictionary: this._getSourcesDictionary(data.sources)
				});
				this.setArticles(0, 20);
				setTimeout(function() {
					this.setArticles(21, 40);
				}.bind(this), 500)
				setTimeout(function() {
					this.setArticles(41, data.sources.length);
				}.bind(this), 1000)
		 	}.bind(this)
		});
	}
	setArticles(start, end) {
		let i;

		for (i = start; i <= end; i += 1) {
			if (this.state.sources[i]) {
				this.getArticles(this.state.sources[i]);
			}
		}
	}
	getArticles(source) {		
		let articles;

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

					if (article.title && article.publishedAt) {
						articles.push(article);
					}
				});

				this.setState({
					articles: this._getShuffledArray(articles),
					numLoaded: this.state.numLoaded + 1
				});
		 	}.bind(this),
		 	error: function (xhr, status) {
		 		this.setState({
		 			numLoaded: this.state.numLoaded + 1
		 		})
		 		console.log(xhr, status)
		 	}.bind(this)
		});
	}
	loadMore() {
		this.setState({
			displayEnd: this.state.displayEnd + 20
		})
	}
	track(article) {
		const category = this.state.sourcesDictionary[article.source].category;
		let count = this.state.count;

		//categories: business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology

		if (count[category]) {
			count[category] += 1;
		} else {
			count[category] = 1;
		}

		this.toggleFocusedArticle(article);

		this.setState({
			count: count,
			clicks: this.state.clicks + 1
		})
	}
	toggleFocusedArticle(article) {
		this.setState({
			focus: article
		})
	}
	toggleSortedArray() {
		const newState = !this.state.isSorted;
		let arr = [];

		if (newState) {
			arr = this._getSortedArray(this.state.articles);
		} else {
			arr = this._getShuffledArray(this.state.articles);
		}

		this.setState({
			articles: arr,
			isSorted: newState
		})
	}
	_getSortedArray(arr) {
		return arr.sort(function (a, b) {
			return moment(a.publishedAt).isBefore(b.publishedAt) ? 1 : -1
		})
	}
	_getShuffledArray(arr) {
		let ctr = arr.length, temp, index;

		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arr[ctr];
			arr[ctr] = arr[index];
			arr[index] = temp;
	    }

	    return arr;
	}
	_getSourcesDictionary(sources) {
		let categories = {};
		let dictionary = {};

		sources.forEach(function(source) {
			dictionary[source.id] = source;
			categories[source.category] = categories[source.category] ? categories[source.category] + 1 : 1;
		});

		//console.log(categories)

		return dictionary;
	}
	render() {
		return (
			<div className='newsfeed container'>
				<NewsfeedBackground clicks={this.state.clicks} 
					count={this.state.count} />
				{this.state.isLoaded === false ?
					<div className='newsfeed-loading'>
						loading...
					</div>
					:
					<div>
						<div className='newsfeed-actions'>
							<div className='newsfeed-sort'>				
								<label>
									<input type='checkbox' checked={this.state.isSorted} onChange={this.toggleSortedArray} />
									sort by most recent
								</label>
							</div>
							<button type='button' className='btn-primary newsfeed-refresh' onMouseUp={this.resetPage} >
								Refresh
								&nbsp;
								<span>&#x21bb;</span>
							</button>
						</div>
						<ul>
							{this.state.articles.map(function (article, i) {
								if (i <= this.state.displayEnd) {
									return (
										<NewsfeedArticle article={article} 
											key={article.url + '_' + i}
											index={i} 
											isActive={this.state.focus.url === article.url}
											onTrack={this.track.bind(this, article)} />
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
				<NewsfeedFocusedArticle article={this.state.focus} 
					source={this.state.focus ? this.state.sourcesDictionary[this.state.focus.source] : {}} 
					onToggleFocusedArticle={this.toggleFocusedArticle} />
				<p className='content-attribution-link'>
					built with <a href='https://newsapi.org/' target='_blank'>
						{'https://newsapi.org/'}
					</a>
				</p>
			</div>
		)
	}
}

export default Newsfeed;