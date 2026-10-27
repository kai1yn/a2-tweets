function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}

	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	document.getElementById('numberTweets').innerText = tweet_array.length;	

	//Part 1: Tweet Dates
	let earliest_date = tweet_array[0].time;
	let latest_date = tweet_array[0].time;

	for (let tweet of tweet_array){
		if (tweet.time < earliest_date)
			earliest_date = tweet.time;
	}

	for (let tweet of tweet_array){
		if (tweet.time > latest_date)
			latest_date = tweet.time;
	}

	
	//formats like eample
	const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
	
	document.getElementById('firstDate').innerText = earliest_date.toLocaleDateString('en-US', options);
	document.getElementById('lastDate').innerText = latest_date.toLocaleDateString('en-US', options);
	
	//Part 1: Tweet Categories
	let live_count = 0; let achievemet_count = 0; let completed_count = 0; misc_count = 0; 
	for (let tweet of tweet_array){ 
	if (tweet.source == "live"){
		live_count ++;
		}	
	if (tweet.source == "achievement"){
		achievemet_count ++;
		}			
	if (tweet.source == "completed"){
		completed_count ++;
		}	
	if (tweet.source == "miscellaneous"){
		misc_count ++;
	}	
	}
	document.getElementsByClassName('liveEvents')[0].innerText = live_count;
	document.getElementsByClassName('completedEvents')[0].innerText = completed_count;
	document.getElementsByClassName('miscellaneous')[0].innerText = misc_count;
	document.getElementsByClassName('achievements')[0].innerText = achievemet_count;

	document.getElementsByClassName('liveEventsPct')[0].innerText = ((live_count/tweet_array.length) * 100).toFixed(2) + "%" ;
	document.getElementsByClassName('completedEventsPct')[0].innerText = ((completed_count/tweet_array.length) * 100).toFixed(2) + "%";
	document.getElementsByClassName('miscellaneousPct')[0].innerText =((misc_count/tweet_array.length) * 100).toFixed(2) + "%";
	document.getElementsByClassName('achievementsPct')[0].innerText = ((achievemet_count/tweet_array.length) * 100).toFixed(2) + "%";

	//Part 1: User-Written Tweets
	let written_count = 0;


	for (let tweet of tweet_array){ 
	if (tweet.written == true){
		written_count ++;
		
	}
	}
	document.getElementsByClassName('completedEvents')[1].innerText = completed_count;
	document.getElementsByClassName('written')[0].innerText = written_count;
	document.getElementsByClassName('writtenPct')[0].innerText = ((written_count/completed_count) * 100).toFixed(2) + "%";


}

//Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
	loadSavedRunkeeperTweets().then(parseTweets);
});