const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const chooseSuggestions = document.getElementById('has-suggestions');
const resultsBox = document.querySelector('.suggestions');
let userInputVal = input.value;

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


input.addEventListener('keyup', search);

function search() {
	let results = [];
	let userInputVal = input.value;
	if (userInputVal.length) {
		results = fruits.filter((fruit) => {
			return fruit.toLowerCase().includes(userInputVal.toLowerCase());
		});
	}
	showSuggestions(results);
	// console.log(results);
}

function showSuggestions(results, userInputValue) {
	console.log(results);
	if (!results.length) {
		resultsBox.innerHTML = '';
	}

	let resultsList = results.map((fruit) => {
		return "<li>" + fruit + "</li>";
	});

	resultsBox.innerHTML = "<ul>" + resultsList.join('') + "</ul>";

	resultsBox.addEventListener("click", useSuggestion);
	// console.log(resultsBox);
	// useSuggestion();
}


// function highlightSuggestion(e) {
// 	chooseSuggestion.forEach(suggestion => suggestion.classList.remove('hover'));

// 	e.target.classList.add('hover');
// 	useSuggestion();
// }

// chooseSuggestion.addEventListener('mouseover', highlightSuggestion);


function useSuggestion(e) {
	e.preventDefault();
	const selectedSuggestion = e.target;
	input.value = selectedSuggestion.innerHTML;
	
	resultsBox.innerHTML = '';
}






