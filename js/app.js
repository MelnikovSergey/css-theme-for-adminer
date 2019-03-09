var books = {};
var randomArticle = Math.round(Math.random()*100000);

$(document).ready(function(){
	$('#modal-add-book').on('click', addBookToLibrary);
});

function addBookToLibrary () {
	var formData = $('form').serializeArray();

	var transformArray = [];
	for (key in formData) {
		transformArray[formData[key]['name']] = formData[key]['value'];
	}

	books[randomArticle] = transformArray;
	console.log(books);
}
