document.getElementById('editor').addEventListener('input', function () {
	// Save the content to your database or wherever you want
	var content = this.innerHTML;
	// console.log(content);
});
// const editor = document.getElementById('editor');
// editor.addEventListener('click', function () )
// editor.textContent = '';

function initclear() {
	console.log('clear function called on click');
	document.getElementById('editor').textContent = '';
	this.removeEventListener('click', initclear);
}
