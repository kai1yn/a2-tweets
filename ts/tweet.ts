class Tweet {
	private text:string;
	time:Date;

	constructor(tweet_text:string, tweet_time:string) {
        this.text = tweet_text;
		this.time = new Date(tweet_time);//, "ddd MMM D HH:mm:ss Z YYYY"
	}

	//returns either 'live_event', 'achievement', 'completed_event', or 'miscellaneous'
    get source():string {
        //TODO: identify whether the source is a live event, an achievement, a completed event, or miscellaneous.

        if (
            this.text.startsWith("Watch")
        )
            return "live";
        if (
             this.text.startsWith("Achieved")
        )
            return "achievement";
        if (
            this.text.includes("completed") || this.text.includes("posted") 
        )
            return "completed";
        else
        return "miscellaneous";
    }

    //returns a boolean, whether the text includes any content written by the person tweeting.
    get written():boolean {
        //TODO: identify whether the tweet is written
        if (
            this.text.includes("-") && !this.text.includes("TomTom") 
        )
        return true;
        return false;
    }

    get writtenText():string {
        if(!this.written) {
            return "";
        }
        //TODO: parse the written text from the tweet
        return "";
    }

    get activityType():string {
        //if (this.source != 'completed_event') {
        //    return "unknown";
        //}
        //TODO: parse the activity type from the text of the tweet
        if (
            this.text.includes("run") && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "run";
        if (
            this.text.includes("walk") || this.text.includes("stroll")  && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "walk";
        if (
            this.text.includes("swim")  && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "swim";
        if (
            this.text.includes("hike") && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "hike";
        if (
            this.text.includes("bike") && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "bike";
        if (
            this.text.includes("workout")  
        )
        return "workout";
        if (
            this.text.includes("ski")  && (this.text.includes("km")||this.text.includes("mi"))
        )
        return "ski";
        if (
            this.text.includes("MySports")  &&(this.text.includes("completed") || this.text.includes("posted") )
        )
        return "MySports";
        
        return "Misc";
    }
    get distance():number {
        const format = /(\d+\.\d{2})\s*(km|mi)/i;
        if(this.text.includes("completed") || this.text.includes("posted") || (this.text.includes("km")||this.text.includes("mi")  ) ){
            let result = (this.text.match(format));
            if (result){
                let numValue, unit;
                numValue = parseFloat(result[1]);
                unit = result[2];
                if (result[2] == "km"){
                    return Number((numValue/1.609).toFixed(2));
                }
                else{
                    return numValue;
                }
            }
        }
        //TODO: prase the distance from the text of the tweet
        return 0;
    }

    getHTMLTableRow(rowNumber:number):string {
        //TODO: return a table row which summarizes the tweet with a clickable link to the RunKeeper activity
        return "<tr></tr>";
    }
}