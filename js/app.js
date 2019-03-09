var book = {};

$(document).ready(function(){
	$('#modal-add-book').on('click', addBookToLibrary);
});

function addBookToLibrary () {
	var formData = $('form').serializeArray();

	var transformArray = [];
	for (key in formData) {
		transformArray[formData[key]['name']] = formData[key]['value'];
	}
	console.log(transformArray);
}
