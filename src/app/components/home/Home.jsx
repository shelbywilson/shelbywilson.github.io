import React from 'react';

import NewsfeedBackground from './../news/NewsfeedBackground.jsx';

const bg = {
	'technology': Math.floor(Math.random() * 8),
	'general': Math.floor(Math.random() * 8),
	'gaming': Math.floor(Math.random() * 8),
	'music': Math.floor(Math.random() * 8),
	'business': Math.floor(Math.random() * 8),
	'sport': Math.floor(Math.random() * 8),
	'homepage-1': Math.floor(Math.random() * 8)
};

// const bg = {
// 	'technology': 3,
// 	'entertainment': 3,
// 	'gaming': 3,
// 	'music': 4,
// 	'sport': 4
// };

function Home() {
  return (
    <div className='content home'>
    	<section>
    		<NewsfeedBackground count={bg} />
    		<h1>
    			west south east
    		</h1>
    		<h4>
    			wilson, shelby elizabeth
    		</h4>
    	</section>
    	<section className='projects'>
    		<h2>
    			projects
    		</h2>
	    	<ul className='home-links'>
	    		<li>
		    		<a href='/news'>
		    			news
		    		</a>
		    	</li>
		    	<li>
		    		<a href='/patterns'>
		    			weaving
		    		</a>
		    	</li>
	    	</ul>
	    </section>
	    <section className='about'>
	    	<h2>
    			about
    		</h2>
    		<ul className='home-links'>
	    		<li>
		    		<a href='https://github.com/shelby-' target='_blank'>
		    			github
		    		</a>
		    	</li>
		    	<li>
		    		<a href='https://bl.ocks.org/shelby-' target='_blank'>
		    			gist
		    		</a>
		    	</li>
		    	<li>
		    		<a href='https://www.linkedin.com/in/shelby-wilson-26b18153' target='_blank'>
		    			linkedin
		    		</a>
		    	</li>
		    	<li>
		    		<a href='mailto:west.south.east000@gmail.com'>
		    			email
		    		</a>
		    	</li>
	    	</ul>
	    </section>
    </div>
  )
}

export default Home;
