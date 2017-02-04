function extractWordCount(str)
{
	var formatedStr = str.replace(/(\W|\d)+/g, ' ').trim();
	var wordList = formatedStr.split(' ');
	var count = {};
	for(i in wordList)
	{
		var word = wordList[i];
		if(count[word] === undefined)
			count[word] = 1;

		count[word]++;
	}
	return count;
}
