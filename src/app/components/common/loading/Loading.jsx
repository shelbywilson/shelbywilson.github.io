import React from 'react';

function Loading() {
  	return (
		<div className='newsfeed-loading'>
			<svg width="60px"  height="60px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			    <circle cy="50" cx="50" fill="#0067ef" r="20">
			    </circle>
			    <circle cy="50" cx="0" fill="#fdec02" r="10">
			      <animate attributeName="cx" calcMode="linear" values="15;85;15" keyTimes="0;0.5;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
			    </circle>
			    <circle cy="50" cx="50" fill="#0067ef" r="20">
			      <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" repeatCount="indefinite" dur="1s"></animate>
			    </circle>
			  </svg>
		</div>
  	);
}

export default Loading;
