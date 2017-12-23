import React from 'react';

function Home() {
  return (
    <div className='content home'>
    	<section>
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
    </div>
  )
}

export default Home;
