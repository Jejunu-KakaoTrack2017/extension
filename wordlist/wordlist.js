var wordList = [
	{"word":"Apple", "mean":"사과"},
	{"word":"Banana", "mean":"바나나"},
	{"word":"Kiwi", "mean":"키위"},
	{"word":"Car", "mean":"자동차"},
	{"word":"Dream", "mean":"꿈"},
	{"word":"Window", "mean":"창문"}];
var word_list;
var wordTag;

function generate_toggle_function(element){
	var target = element;
	var toggle = false;

	return function (){
		if(toggle){
			target.style.display = "none";
			toggle = false;
		}else{
			target.style.display = "block";
			toggle = true;
		}
	}
}

function generate_word_element(data) {
	var word_element = wordTag.cloneNode(true);
	var word = word_element.getElementsByClassName("word")[0];
	var mean = word_element.getElementsByClassName("mean")[0];

	word.innerHTML = data.word;
	mean.innerHTML = data.mean;

	word.addEventListener("click", generate_toggle_function(mean));
	return word_element;
}

function refresh_word_list(list){
	word_list.innerHTML = "";
	var element;
	for(i in list){
		element = generate_word_element(list[i]);
		word_list.appendChild(element);
	}
}

function init() {
	word_list = document.getElementById("word_list");
	wordTag = word_list.getElementsByTagName("li")[0];
	word_list.removeChild(wordTag)

	refresh_word_list(wordList);
}

document.addEventListener("DOMContentLoaded", init)
