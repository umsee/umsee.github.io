const spawnButton = document.getElementById('spawnButton');
const container = document.getElementById('container');

spawnButton.addEventListener('click', async () => {
	// Fetch the content of the separate HTML file
	const response = await fetch('contenteditable.html');
	const html = await response.text();

	// Create a new div element
	const newComponent = document.createElement('div');
	newComponent.className = 'grid-item';
	newComponent.id = 'note_' + Date.now();

	//Clears the text previously there
	newComponent.textContent = '';

	// The content of the input is simultaneously cast into the element
	newComponent.innerHTML = html;
	// Append the new component to the container as the first element
	container.insertBefore(newComponent, container.firstChild);
	newComponent.focus();
	console.log('processing done');
});
