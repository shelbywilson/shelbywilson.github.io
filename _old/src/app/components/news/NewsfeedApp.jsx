import React from 'react';
import $ from 'jquery';
import moment from 'moment';

import NewsfeedArticle from './NewsfeedArticle.jsx';
import NewsfeedFocusedArticle from './NewsfeedFocusedArticle.jsx';
import NewsfeedBackground from './NewsfeedBackground.jsx';
import NewsfeedAppNav from './NewsfeedAppNav.jsx';
import NewsfeedAppAbout from './NewsfeedAppAbout.jsx';
import Loading from './../common/loading/Loading.jsx';

import getShuffledArray from './../../utility/getShuffledArray';

const apiKey = 'cb15d26e791f471abee466ce78d79760';

class NewsfeedApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sources: [],
			articles: [],
			initialArticles: [],
			displayEnd: 20,
			isLoaded: false,
			sourcesDictionary: {},
			count: {},
			clicks: 0,
			countBySource: {},
			categories: [],
			focus: false,
			isSorted: false,
			query: ''
		}

		this.loadMore = this.loadMore.bind(this);
		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
		this.track = this.track.bind(this);
		this.setSources = this.setSources.bind(this);
		this.toggleSortedArray = this.toggleSortedArray.bind(this);
		this.refreshPage = this.refreshPage.bind(this);
		this.search = this.search.bind(this);
		this.setArticles = this.setArticles.bind(this);

		this.setSources();
	}
	componentDidMount() {
		setTimeout(function () {
			if (!this.state.isLoaded) {
				this.setState({
					isLoaded: true
				})
			}
		}.bind(this), 10000)
	}
	refreshPage() {
		this.setState({
			count: {},
			countBySource: {},
			clicks: 0,
			articles: [],
			initialArticles: [],
			displayEnd: 20,
			isSorted: false,
			isLoaded: false
		});

		this.setArticles(1, []);
	}
	setSources() {
		$.ajax({
			url: "https://newsapi.org/v1/sources?language=en",
			success: function(data){
				this.setState({
					sources: data.sources,
					sourcesDictionary: this._getSourcesDictionary(data.sources),
					categories: this._getCategories(data.sources)
				});
				this.setArticles();
		 	}.bind(this)
		});
	}
	setArticles(page = 1, articles = this.state.articles.slice()) {	
		let allSources = '';

		this.state.sources.forEach((source) => {
			allSources += source.id + ',';
		});

		allSources = allSources.slice(0,-1);

		$.ajax({
			url: "https://newsapi.org/v2/top-headlines?"
				+ "sources=" + allSources
				+ "&apiKey=" + apiKey
				+ "&pageSize=" + 100
				+ "&page=" + page
			,
			success: function(data){
				data.articles.forEach((article) => {
					article.source = article.source.id;

					if (article.title && article.publishedAt) {
						articles.push(article);
					}
				});

				this.setState({
					articles: articles,
					initialArticles: articles.slice()
				});

				if (data.totalResults/100 > page) {
					this.setArticles(page + 1);
				} else {
					articles = getShuffledArray(articles);
					this.setState({
						isLoaded: true,
						articles: articles,
						initialArticles: articles.slice()
					})
				}
		 	}.bind(this),
		 	error: function (xhr, status) {
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
		let countBySource = this.state.countBySource;

		//categories: business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology

		if (count[category]) {
			count[category] += 1;
		} else {
			count[category] = 1;
		}

		if (countBySource[article.source]) {
			countBySource[article.source] += 1;
		} else {
			countBySource[article.source] = 1;
		}

		this.toggleFocusedArticle(article);

		this.setState({
			count: count,
			clicks: this.state.clicks + 1,
			countBySource: countBySource
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
			arr = getShuffledArray(this.state.articles);
		}

		this.setState({
			articles: arr,
			isSorted: newState
		})
	}
	search(e) {
		const query = e.target.value.replace(/\s+/g,' ').toLowerCase().trim().split(' ');
		let j;

		let articles = $.grep(this.state.initialArticles, function (article, i) {
			for (j = 0; j < query.length; j += 1) {
				if (article.title.toLowerCase().indexOf(query[j]) === -1 && (article.description || '').toLowerCase().indexOf(query[j]) === -1) {
					return false;
				}
			}
			return true;
		});

		this.setState({
			articles: articles,
			query: e.target.value.trim()
		})
	}
	_getSortedArray(arr) {
		return arr.sort(function (a, b) {
			return moment(a.publishedAt).isBefore(b.publishedAt) ? 1 : -1
		})
	}
	_getSourcesDictionary(sources) {
		let dictionary = {};

		sources.forEach(function(source) {
			dictionary[source.id] = source;
		});

		return dictionary;
	}
	_getCategories(sources) {
		let categories = {};

		sources.forEach(function(source) {
			categories[source.category] = true;
		});

		return Object.keys(categories);
	}
	render() {
		const {
			count,
			countBySource,
			sourcesDictionary,
			categories,
			articles,
			clicks,
			isLoaded,
			isSorted,
			displayEnd,
			query
		} = this.state;
		return (
			<div className='newsfeed container'>

				<NewsfeedAppNav>
					<NewsfeedAppAbout count={count} 
						countBySource={countBySource} 
						sourcesDictionary={sourcesDictionary} 
						categories={categories}
						articles={articles} />
				</NewsfeedAppNav>

				<NewsfeedBackground clicks={clicks} 
					count={count} />
				{isLoaded === false ?
					<Loading />
					:
					<div>
						<div className='newsfeed-actions'>
							<div className='newsfeed-sort'>				
								<label>
									<input type='checkbox' checked={isSorted} onChange={this.toggleSortedArray} />
									sort by most recent
								</label>
							</div>

							<button type='button' className='btn-primary newsfeed-refresh' onMouseUp={this.refreshPage} >
								Refresh
								&nbsp;
								<span className='symbol-refresh'>&#x21bb;</span>
							</button>
						</div>
						<div className='newsfeed-search'> 
							<input type='text' className={query.length === 0 ? 'empty' : ''} spellCheck={false} onKeyUp={this.search} placeholder={'search'}/>
							{articles.length} articles
						</div>
						<ul className='newsfeed-articles'>
							{articles.map(function (article, i) {
								if (i <= displayEnd) {
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
						{displayEnd < articles.length &&
							<div className='newsfeed-load-more'>
								<button type="button" onMouseUp={this.loadMore} >
									More + 
								</button>
							</div>
						}
					</div>
				}
				<NewsfeedFocusedArticle article={this.state.focus} 
					source={this.state.focus ? sourcesDictionary[this.state.focus.source] : {}} 
					onToggleFocusedArticle={this.toggleFocusedArticle} />
			</div>
		)
	}
}

export default NewsfeedApp;