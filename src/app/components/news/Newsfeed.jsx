import React from 'react';
import $ from 'jquery';
import moment from 'moment';

import NewsfeedArticle from './NewsfeedArticle.jsx';
import NewsfeedFocusedArticle from './NewsfeedFocusedArticle.jsx';

const apiKey = 'cb15d26e791f471abee466ce78d79760';

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sources: [],
			articles: [],
			displayEnd: 30,
			isLoad: false,
			sourcesDictionary: {},
			skew: {r: 255, g: 255, b: 255},
			count: {},
			focus: false
		}

		this.getArticles = this.getArticles.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.loadMore = this.loadMore.bind(this);
		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
		this.track = this.track.bind(this);
		this.setSources = this.setSources.bind(this);
		this.setArticles = this.setArticles.bind(this);

		setTimeout(function () {
			this.setState({
				isLoad: true
			})
		}.bind(this), 1000)

		this.setSources();
	}
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
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

		for (i = start; i < end; i += 1) {
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
	track(article) {
		const category = this.state.sourcesDictionary[article.source].category;
		let count = this.state.count;

		//categories: business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology

		if (count[category]) {
			count[category] += 1;
		} else {
			count[category] = 1;
		}

		console.log(count)

		this.toggleFocusedArticle(article);

		this.setState({
			count: count
		})
	}
	toggleFocusedArticle(article) {
		this.setState({
			focus: article
		})
	}
	handleKeyDown(e) {
		if (e.which === 27) {
			this.toggleFocusedArticle(false);
		}
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

		console.log(categories)

		return dictionary;
	}
	render() {
		return (
			<div className='newsfeed'>
				{this.state.isLoad === false ?
					<div className='newsfeed-loading'>
						loading...
					</div>
					:
					<div>
						<ul>
							{this.state.articles.map(function (article, i) {
								if (i <= this.state.displayEnd) {
									return (
										<NewsfeedArticle article={article} 
											key={article.url + '_' + i}
											index={i} 
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
				<p className='attribution-link'>
					built with <a href='https://newsapi.org/'>{'https://newsapi.org/'}</a>
				</p>
			</div>
		)
	}
}

export default Newsfeed;