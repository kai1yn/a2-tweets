function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}
	
	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	alert("test");
	let run=0, walk=0, swim=0, hike=0, bike=0,workout=0,ski=0, mysports=0, misc=0;
	let runDistance = 0,bikeDistance = 0, walkDistance = 0;
	let totalDistance=0, tweetCounter =0;
	const options = {weekday: 'long'};
	//tweet.time.toLocaleDateString('en-US', options)== "Saturday" ||tweet.time.toLocaleDateString('en-US', options)== "Sunday"
	//document.getElementById('firstDate').innerText = tweet.time.toLocaleDateString('en-US', options);
	//findtop3
	for (let tweet of tweet_array){ 
		if (tweet.activityType == "run"){
		run ++;
		runDistance += tweet.distance;
		}
		if (tweet.activityType == "walk"){
		walk ++;
		walkDistance+= tweet.distance;
		}
		if (tweet.activityType == "bike"){
		bike ++;
		bikeDistance += tweet.distance;
			}	
		if (tweet.activityType == "swim"){
		swim ++;
		}
		if (tweet.activityType == "hike"){
		hike ++;
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
		if (tweet.distance != 0){
			tweetCounter++;
			totalDistance += tweet.distance;
		}
		}
	
	averageDistance = totalDistance/tweetCounter;
	let weekdayCount =0, weekendCount = 0;
	for (let tweet of tweet_array){ 
		if (tweet.distance > averageDistance){
			if (tweet.time.toLocaleDateString('en-US', options)== "Saturday" ||tweet.time.toLocaleDateString('en-US', options)== "Sunday" ){
				weekendCount ++;
			}
			if (tweet.time.toLocaleDateString('en-US', options)== "Monday" ||tweet.time.toLocaleDateString('en-US', options)== "Tuesday"  ||tweet.time.toLocaleDateString('en-US', options)== "Wednesday" 
			||tweet.time.toLocaleDateString('en-US', options)== "Thursday"  ||tweet.time.toLocaleDateString('en-US', options)== "Friday"){
				weekdayCount ++;
			}
		}
	}


	dayCount = weekdayCount;
	dayValue = "Weekdays";
	if (weekendCount> dayCount){
		dayCount = weekendCount;
		dayValue = "Weekends"
	}
		
	let activityCount = {run,walk, swim, hike, bike,workout,ski, mysports, misc};
	let sortedActivityCount = Object.entries(activityCount).sort((a,b) => b[1]-a[1]);
	let [firstplace, secondplace, thirdplace] = sortedActivityCount;
	
	let runAverage = (runDistance/run);
	let walkAverage = (walkDistance/walk);
	let bikeAverage = (bikeDistance/bike);

	let longestAverage = runAverage, shortestAverage = runAverage;
	let longestActivity = "run", shortestActivity = "run";
	if (walkAverage > longestAverage){
		longestAverage = walkAverage;
		longestActivity = "walk";
	}
	if (bikeAverage > longestAverage){
		longestAverage = bikeAverage;
		longestActivity = "bike";
	}
		
	if (walkAverage < shortestAverage){
		shortestAverage = walkAverage;
		shortestActivity = "walk"
	}
		
	if (bikeAverage < shortestAverage){
		shortestAverage = bikeAverage;
		shortestActivity = "bike";
	}
		
	
	alert(tweet_array[0].distance);
	
	
	document.getElementById('numberActivities').innerText = 8;
	document.getElementById('firstMost').innerText = firstplace[0];
	document.getElementById('secondMost').innerText = secondplace[0];
	document.getElementById('thirdMost').innerText = thirdplace[0];
	document.getElementById('longestActivityType').innerText = longestActivity;
	document.getElementById('shortestActivityType').innerText = shortestActivity;
	document.getElementById('weekdayOrWeekendLonger').innerText = dayValue;

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

document.addEventListener('DOMContentLoaded', function (event) {
	loadSavedRunkeeperTweets().then(parseTweets);
});
	