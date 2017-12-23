import React from 'react';

function Home() {
  return (
    <div>
    	<ul className='home-links'>
    		<li>
	    		<a href='/about'>
	    			about
	    		</a>
	    	</li>
    		<li>
	    		<a href='/news'>
	    			news
	    		</a>
	    	</li>
	    	<li>
	    		<a href='/patterns'>
	    			patterns
	    		</a>
	    	</li>
    	</ul>
    </div>
  )
}

export default Home;
