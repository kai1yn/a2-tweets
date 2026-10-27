function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}
	tweet_array = runkeeper_tweets.map(function(tweet) {
		return new Tweet(tweet.text, tweet.created_at);
	});
	writtenTweets = [];
	for (let tweet of tweet_array){
		if (tweet.written){
			writtenTweets.push(tweet);
		}
	}
	let table = document.getElementById("tweetTable");
	
	for (let i =1; i<= writtenTweets.length; i++){
		let tweet = writtenTweets[i-1];
		
		
		let row = table.insertRow();
		row.insertCell(0).textContent = i;
		row.insertCell(1).textContent = tweet.activityType;
		row.insertCell(2).textContent = tweet.text;
	}

	//TODO: Filter to just the written tweets
	alert(writtenTweets.length);
	//alert(tableTweets.length);
}


function addEventHandlerForSearch() {
	let userInput = document.getElementById("textFilter");
	let text = document.getElementById("searchText");
	let count = document.getElementById("searchCount");

	userInput.addEventListener("input", function(){
		let query = userInput.value.toLowerCase();
		text.textContent = userInput.value;

		let filteredTweets = writtenTweets.filter(function(tweet){
			return tweet.text.toLowerCase().includes(query);
		});

	
	let table = document.getElementById("tweetTable");
	table.innerHTML = "";
	for (let i = 0; i< filteredTweets.length; i++){
		let tweet = filteredTweets[i];
		let row = table.insertRow();
		row.insertCell(0).textContent = i+1;
		row.insertCell(1).textContent = tweet.activityType;
		row.insertCell(2).textContent = tweet.text;
	}
	count.textContent = filteredTweets.length;
});
	//TODO: Search the written tweets as text is entered into the search box, and add them to the table
}

//Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
	addEventHandlerForSearch();
	loadSavedRunkeeperTweets().then(parseTweets);
});