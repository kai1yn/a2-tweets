function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}
	
	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});

	let distanceArray = [];
	let run=0, walk=0, swim=0, hike=0, bike=0,workout=0,ski=0, mysports=0, misc=0;
	let runDistance = 0,bikeDistance = 0, walkDistance = 0;
	let totalDistance=0, tweetCounter =0;
	const options = {weekday: 'long'};
	//tweet.time.toLocaleDateString('en-US', options)== "Saturday" ||tweet.time.toLocaleDateString('en-US', options)== "Sunday"
	//document.getElementById('firstDate').innerText = tweet.time.toLocaleDateString('en-US', options);
	//findtop3
	let graphTweetArray = [];
	let monRun = 0, tueRun = 0, wedRun =0, thuRun=0, friRun=0, satRun=0, sunRun =0;
	let monRunCount = 0, tueRunCount = 0, wedRunCount =0, thuRunCount=0, friRunCount=0, satRunCount=0, sunRunCount =0;
	let monWalk = 0, tueWalk = 0, wedWalk =0, thuWalk=0, friWalk=0, satWalk=0, sunWalk =0;
	let monWalkCount = 0, tueWalkCount = 0, wedWalkCount =0, thuWalkCount=0, friWalkCount=0, satWalkCount=0, sunWalkCount =0;
	let monBike = 0, tueBike = 0, wedBike =0, thuBike=0, friBike=0, satBike=0, sunBike =0;
	let monBikeCount = 0, tueBikeCount = 0, wedBikeCount =0, thuBikeCount=0, friBikeCount=0, satBikeCount=0, sunBikeCount =0;
	for (let tweet of tweet_array){ 
		let temp_time = tweet.time.toLocaleDateString('en-US', options)
		if (tweet.activityType == "run"){
		run ++;
		runDistance += tweet.distance;
			if (temp_time == "Monday"){
				monRun += tweet.distance;
				monRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Mon" });
				
			}
				
			if (temp_time== "Tuesday"){
				tueRun += tweet.distance;
				tueRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Tue" });
			}	
				
			if (temp_time == "Wednesday"){
				wedRun += tweet.distance;
				wedRunCount++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Wed" });
			}
			if (temp_time== "Thursday"){
				thuRun += tweet.distance;
				thuRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Thu" });
			}
			if (temp_time == "Friday"){
				friRun += tweet.distance;
				friRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Fri" });
			}
			if (temp_time == "Saturday"){
				satRun += tweet.distance;
				satRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Sat" });
			}
				
			if (temp_time == "Sunday"){
				sunRun += tweet.distance;
				sunRunCount ++;
				distanceArray.push ({activity: "Run", distance: tweet.distance, time: "Sun" });
			}
			
		}
		if (tweet.activityType == "walk"){
		walk ++;
		walkDistance+= tweet.distance;
		if (temp_time == "Monday"){
				monWalk += tweet.distance;
				monWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Mon" });
			}
				
			if (temp_time == "Tuesday"){
				tueWalk += tweet.distance;
				tueWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Tue" });
			}
				
			if (temp_time == "Wednesday"){
				wedWalk += tweet.distance;
				wedWalkCount++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Wed" });
			}
			if (temp_time == "Thursday"){
				thuWalk += tweet.distance;
				thuWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Thu" });
			
			}
			if (temp_time == "Friday"){
				friWalk += tweet.distance;
				friWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Fri" });
			
			}
			if (temp_time == "Saturday"){
				satWalk += tweet.distance;
				satWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Sat" });
			
			}
				
			if (temp_time== "Sunday"){
				sunWalk += tweet.distance;
				sunWalkCount ++;
				distanceArray.push ({activity: "Walk", distance: tweet.distance, time: "Sun" });
			
			}
		
		}
		if (tweet.activityType == "bike"){
		bike ++;
		bikeDistance += tweet.distance;
		
		if (temp_time == "Monday"){
				monBike += tweet.distance;
				monBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Mon" });
			}
				
			if (temp_time == "Tuesday"){
				tueBike += tweet.distance;
				tueBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Tue" });
			}
				
			if (temp_time == "Wednesday"){
				wedBike += tweet.distance;
				wedBikeCount++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Wed" });
			}
			if (temp_time == "Thursday"){
				thuBike += tweet.distance;
				thuBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Thu" });
			}
			if (temp_time== "Friday"){
				friBike += tweet.distance;
				friBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Fri" });
			}
			if (temp_time == "Saturday"){
				satBike += tweet.distance;
				satBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Sat" });
			}
				
			if (temp_time == "Sunday"){
				sunBike += tweet.distance;
				sunBikeCount ++;
				distanceArray.push ({activity: "Bike", distance: tweet.distance, time: "Sun" });
			}
		
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
	graphTweetArray.push ({activity: "Run", distance: (sunRun/sunRunCount), time: "Sun" });
	graphTweetArray.push ({activity: "Run", distance: (monRun/monRunCount), time: "Mon" });
	graphTweetArray.push ({activity: "Run", distance: (tueRun/tueRunCount), time: "Tue" });
	graphTweetArray.push ({activity: "Run", distance: (wedRun/wedRunCount), time: "Wed" });
	graphTweetArray.push ({activity: "Run", distance: (thuRun/thuRunCount), time: "Thu" });
	graphTweetArray.push ({activity: "Run", distance: (friRun/friRunCount), time: "Fri" });
	graphTweetArray.push ({activity: "Run", distance: (satRun/satRunCount), time: "Sat" });

	graphTweetArray.push ({activity: "Walk", distance: (sunWalk/sunWalkCount), time: "Sun" });
	graphTweetArray.push ({activity: "Walk", distance: (monWalk/monWalkCount), time: "Mon" });
	graphTweetArray.push ({activity: "Walk", distance: (tueWalk/tueWalkCount), time: "Tue" });
	graphTweetArray.push ({activity: "Walk", distance: (wedWalk/wedWalkCount), time: "Wed" });
	graphTweetArray.push ({activity: "Walk", distance: (thuWalk/thuWalkCount), time: "Thu" });
	graphTweetArray.push ({activity: "Walk", distance: (friWalk/friWalkCount), time: "Fri" });
	graphTweetArray.push ({activity: "Walk", distance: (satWalk/satWalkCount), time: "Sat" });

	graphTweetArray.push ({activity: "Bike", distance: (sunBike/sunBikeCount), time: "Sun" });
	graphTweetArray.push ({activity: "Bike", distance: (monBike/monBikeCount), time: "Mon" });
	graphTweetArray.push ({activity: "Bike", distance: (tueBike/tueBikeCount), time: "Tue" });
	graphTweetArray.push ({activity: "Bike", distance: (wedBike/wedBikeCount), time: "Wed" });
	graphTweetArray.push ({activity: "Bike", distance: (thuBike/thuBikeCount), time: "Thu" });
	graphTweetArray.push ({activity: "Bike", distance: (friBike/friBikeCount), time: "Fri" });
	graphTweetArray.push ({activity: "Bike", distance: (satBike/satBikeCount), time: "Sat" });

	
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
		
	
	
	alert(weekendCount);
	
	document.getElementById('numberActivities').innerText = 8;
	document.getElementById('firstMost').innerText = firstplace[0];
	document.getElementById('secondMost').innerText = secondplace[0];
	document.getElementById('thirdMost').innerText = thirdplace[0];
	document.getElementById('longestActivityType').innerText = longestActivity;
	document.getElementById('shortestActivityType').innerText = shortestActivity;
	document.getElementById('weekdayOrWeekendLonger').innerText = "weekends";

	//TODO: create a new array or manipulate tweet_array to create a graph of the number of tweets containing each type of activity.
	const button = document.getElementById("aggregate");
 
	alert (distanceArray[0].distance);

	let aggregated = true;
	activity_vis_spec = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    "values": distanceArray.filter(d => d.distance <=500),
	  },
	  	  "mark" : "point",
		 

	  "encoding":{
		"x": {
			"field": "time",
			"type" : "ordinal",
			"title" : "time(Day)",
			"sort" :[
				"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
			],
			"axis" : {"grid" : true, "tickCount" : 10}
			
		},
		"y": {
			"field": "distance",
			"type" : "quantitative",
			"title" : "Distance",
			"axis" : {"grid" : true, "tickCount" : 10}
			
			
		
		}, 
		"color":{
			"field": "activity",
			"type": "nominal"
		}
	  }
	  //TODO: Add mark and encoding
	};
	activity_vis_spec_2 = {
	  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	  "description": "A graph of the number of Tweets containing each type of activity.",
	  "data": {
	    "values": graphTweetArray,
	  },
	  	  "mark" : "point",
		 

	  "encoding":{
		"x": {
			"field": "time",
			"type" : "ordinal",
			"title" : "time(Day)",
			"sort" :[
				"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
			],
			"axis" : {"grid" : true, "tickCount" : 14}
			
		},
		"y": {
			"field": "distance",
			"type" : "quantitative",
			"title" : "Mean of Distance",
			"axis" : {"grid" : true, "tickCount" : 14}
		
		}, 
		"color":{
			"field": "activity",
			"type": "nominal"
		}
	  }
	  //TODO: Add mark and encoding
	  
	};
	vegaEmbed('#activityVis', activity_vis_spec, {actions:false});
	button.addEventListener("click", () =>{
	if (aggregated){
		vegaEmbed('#activityVis', activity_vis_spec_2, {actions:false});
		aggregated = false;
	}
	
	else{
		aggregated = true;
		vegaEmbed('#activityVis', activity_vis_spec, {actions:false});
	}
 });

	//TODO: create the visualizations which group the three most-tweeted activities by the day of the week.
	//Use those visualizations to answer the questions about which activities tended to be longest and when.
 
}
 

document.addEventListener('DOMContentLoaded', function (event) {
	
	loadSavedRunkeeperTweets().then(parseTweets);
});
	