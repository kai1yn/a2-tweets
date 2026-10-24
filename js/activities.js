function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}
	
	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	
	let run=0, walk=0, swim=0, hike=0, bike=0,workout=0,ski=0, mysports=0, misc=0;

	//findtop3
	for (let tweet of tweet_array){ 
		if (tweet.activityType == "run"){
		run ++;
		}
		if (tweet.activityType == "walk"){
		walk ++;
		}
		if (tweet.activityType == "swim"){
		swim ++;
		}
		if (tweet.activityType == "hike"){
		hike ++;
		}
		if (tweet.activityType == "bike"){
		bike ++;
		}	
		if (tweet.activityType == "workout"){
		workout ++;
		}
		if (tweet.activityType == "ski"){
		ski ++;
		}
		if (tweet.activityType == "MySports"){
		mysports ++;
		}
		if (tweet.activityType == "misc"){
		misc ++;
		}
	}
	let activityCount = {run,walk, swim, hike, bike,workout,ski, mysports, misc};
	let sortedActivityCount = Object.entries(activityCount).sort((a,b) => b[1]-a[1]);
	let [firstplace, secondplace, thirdplace] = sortedActivityCount;

	alert(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(tweet_array[0]),"activityType")?.get?.toString());
	alert(tweet_array[0].activityType);
	alert(run);
	
	document.getElementById('numberActivities').innerText = 8;
	document.getElementById('firstMost').innerText = firstplace[0];
	document.getElementById('secondMost').innerText = secondplace[0];
	document.getElementById('thirdMost').innerText = thirdplace[0];
	//TODO: create a new array or manipulate tweet_array to create a graph of the number of tweets containing each type of activity.

	activity_vis_spec = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    "values": tweet_array
	  }
	  //TODO: Add mark and encoding
	};
	vegaEmbed('#activityVis', activity_vis_spec, {actions:false});

	//TODO: create the visualizations which group the three most-tweeted activities by the day of the week.
	//Use those visualizations to answer the questions about which activities tended to be longest and when.
}

//People logged the most <span id="firstMost">???</span>, <span id="secondMost">???</span>, and <span id="thirdMost">???</span> activities.</p>
//    <div id="activityVis"></div>
  //  <p>Of these three activities, people tended to <span id="longestActivityType">???</span> the longest distance and <span id="shortestActivityType">???</span> the shortest. People tended to do their longest activities on <span id="weekdayOrWeekendLonger">???</span>.</p>
    //<button id="aggregate" class="btn btn-primary">Show means</button>
    //<div id="distanceVis"></div>
    //<div id="distanceVisAggregated"></div>
//Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
	loadSavedRunkeeperTweets().then(parseTweets);
});