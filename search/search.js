// equalFunction.
// list를 이루는 원소와 word가 같음을 비교하는 함수.
// list를 이루는 원소와 word원소를 고려하고 만들어야 한다.
// 모든 반환은 list의 원소를 반환한다.
// 만약 해당하는 원소가 없을 시 null을 반환한다.
function searchWord(list, word, equalFunction)
{
	var result = null;
	for(i in list)
	{
		if(equalFunction(list[i], word))
		{
			result = list[i];
			break;
		}
	}
	return result;
}

// equalFunction은 앞의 것과 같다.
// words는 원소 형태가 아닌 배열이다.
// 반환은 list의 원소배열로 반환한다.
function searchMultiWord(list, words, equalFunction)
{
	var result = [];
	for(i in words){
		var res = searchWord(list,words[i], equalFunction)
		if(res !== null){
			result.push(res);
		}
	}
	return result;
}
