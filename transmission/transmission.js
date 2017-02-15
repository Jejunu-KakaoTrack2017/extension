/*
 * parameter
 * -url : url string
 * -search : {
 *	word:count,...
 * }
 * -callback : callback function.
 *  function (wordlist=[{word:word, mean:mean},...]);
 * return 
 * -array:[{word:word, mean:mean},...]
 * 
 */
function requestWordMean(url, words, callback)
{
	var xhr = new XMLHttpRequest();
	var response;
	xhr.open("POST", "url", true);
	xhr.onreadystatechange = function(){
		if(this.readyState == 4){
			response = JSON.parse(this.responseText);
			callback(response);
		}
	}
	var send = {
		"action":"word_mean",
		"url":url,
		"wordList":makeWordList(words)
	};
	xhr.send(JSON.stringify(send));
}

function makeWordList(words){
	var wordlist=[];
	for(word in words){
		var i = {
			"word":word,
			"count":words[word]
		};
		wordlist.push(i);
	}
	return wordlist;
}

/*
 * parameter
 * -url : url string.
 * -search : search string.
 * -callback : callback function.
 *  function (string);
 * return 
 * -string : translated string.
 */
function requestTranslate(url, search, callback)
{
	var xhr = new XMLHttpRequest();
	var response;
	xhr.open("POST", "url", true);
	xhr.onreadystatechange = function(){
		if(this.readyState == 4){
			response = JSON.parse(this.responseText);
			callback(response.translate);
		}
	}

	var send = {
		"action":"translate",
		"search":search
	}
	xhr.send(JSON.stringify(send));
}
